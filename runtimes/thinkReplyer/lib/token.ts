import * as kuromoji from "kuromoji";
import * as database from "./database";
import * as negaposi from "./negaposi.js";

export async function tokenize(text: string): Promise<kuromoji.IpadicFeatures[]> {
  let result = new Promise<kuromoji.IpadicFeatures[]>((resolve) => {
    kuromoji
      .builder({
        dicPath: `${__dirname}/../node_modules/kuromoji/dict`,
      })
      .build((err, tokenizer) => {
        resolve(tokenizer.tokenize(text));
      });
  });
  return result;
}

export function getTokensByIdFromDatabase(id: string): database.Token {
  const dict: database.TokenDic = database.getTokenDic();
  let result: database.Token[] = [];

  dict.forEach((word) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.id !== id) return;

    result[result.length] = word;
  });

  return result[0];
}

export function getTokensByPosFromDatabase(pos: string): database.Token[] {
  const dict: database.TokenDic = database.getTokenDic();
  let result: database.Token[] = [];

  dict.forEach((word) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.pos !== pos) return;

    result[result.length] = word;
  });

  return result;
}

export function getTokenByPosFromDatabase(pos: string): database.Token {
  const dict: database.TokenDic = database.getTokenDic();
  let result: database.Token[] = [];

  dict.forEach((word) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.pos !== pos) return;

    result[result.length] = word;
  });

  console.log(pos, result.length)
  return result[Math.floor(Math.random() * ((result.length - 1) - 0) + 0)];
}

export function getToken(kuromojiToken: kuromoji.IpadicFeatures[], pos: string = "名詞"): kuromoji.IpadicFeatures[] {
  let result: kuromoji.IpadicFeatures[] = [];

  kuromojiToken.forEach((word) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.pos !== pos) return;

    result[result.length] = word;
  });

  return result;
}

export function getDuplicationTokensFromDatabase(token: database.Token): database.Token[] {
  const dict: database.TokenDic = database.getTokenDic();
  let result: database.Token[] = [];

  dict.forEach((word) => {
    if (!word) return;
    if (typeof word !== "object") return;

    let token2 = { ...token };
    let word2 = { ...word };

    token2.id = "";
    word2.id = "";

    if (token2.text === word2.text && token2.pos === word2.pos) result[result.length] = word;
  });

  return result;
}

export function getTokenByWord(tokens: kuromoji.IpadicFeatures[] | database.Token[], text: string): database.Token[] {
  if (!implementsTokens(tokens)) tokens = convertKuromojiToToken(tokens);

  let result: database.Token[] = [];

  tokens.forEach((word) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.text !== text) return;

    result[result.length] = word;
  });

  return result;
}

export function implementsTokens(arg: any): arg is database.Token[] {
  return arg !== null &&
    typeof arg === "object" &&
    typeof arg[0].id === "string" &&
    typeof arg[0].text === "string" &&
    typeof arg[0].pos === "string"
}

export function implementsToken(arg: any): arg is database.Token {
  return arg !== null &&
    typeof arg === "object" &&
    typeof arg.text === "string"
}

export function excludeTokenWithPos(token: kuromoji.IpadicFeatures[] | database.Token[], pos: string = "名詞"): kuromoji.IpadicFeatures[] | database.Token[] {
  let result: kuromoji.IpadicFeatures[] | database.Token[] = [];

  token.forEach((word, i) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.pos !== pos) {
      result[result.length] = word;
    }

    result.splice(i, 1);
  });

  return result;
}

export function replaceTokensByPos(token: kuromoji.IpadicFeatures[] | database.Token[], replace: kuromoji.IpadicFeatures | database.Token | string, pos: string = "名詞"): kuromoji.IpadicFeatures[] | database.Token[] {
  if (implementsTokens(token)) {
    if (implementsToken(replace)) {
      if (typeof replace === "string") {
        token.forEach((word, i) => {
          if (!word) return;
          if (typeof word !== "object") return;

          if (word.pos === pos) {
            token[i].pos = replace;
          }
        });
      } else {
        token.forEach((word, i) => {
          if (!word) return;
          if (typeof word !== "object") return;

          if (word.pos === pos) {
            token[i] = replace;
          }
        });
      }
    }
  } else {
    if (implementsToken(replace)) throw new Error("aa");

    if (typeof replace === "string") {
      token.forEach((word, i) => {
        if (!word) return;
        if (typeof word !== "object") return;

        if (word.pos === pos) {
          token[i].pos = replace;
        }
      });
    } else {
      token.forEach((word, i) => {
        if (!word) return;
        if (typeof word !== "object") return;

        if (word.pos === pos) {
          token[i] = replace;
        }
      });
    }
  }

  return token;
}


export function hideTokensByPos(token: database.Token[], pos: string = "名詞"): database.Token[] {
  token.forEach((word, i) => {
    if (!word) return;
    if (typeof word !== "object") return;

    if (word.pos === pos) {
      token[i].pos_detail_3 += "／置換可能";
    }
  });

  return token;
}

export function replaceTokenOfDatabaseById(tokenId: string, token: database.Token) {
  const dict: database.TokenDic = database.getTokenDic();

  dict.forEach((word, i) => {
    if (!word) return;
    if (typeof word !== "object") return;
    if (word.id !== tokenId) return;

    dict[i] = token;
  });

  database.setTokenDic(dict);
}

export async function replaceWithExistingTokens(tokens: database.Token[]) {
  tokens.forEach((word, i) => {
    if (!word) return;
    if (typeof word !== "object") return;

    const duplicationToken = getDuplicationTokensFromDatabase(word);

    if (duplicationToken.length !== 0) tokens[i] = duplicationToken[0];
  });

  return tokens;
}

export function addTokenToDatabase(token: database.Token) {
  if (getDuplicationTokensFromDatabase(token).length !== 0) return;
  let dict: database.TokenDic = database.getTokenDic();

  dict[dict.length] = token;

  database.setTokenDic(dict);
}

export function addTokensToDatabase(tokens: database.Token[]) {
  let dict: database.TokenDic = database.getTokenDic();

  tokens.forEach((token) => {
    const duplicationToken = getDuplicationTokensFromDatabase(token);

    if (duplicationToken.length >= 1) return;

    dict[dict.length] = token;
  });

  database.setTokenDic(dict);
}

export function convertKuromojiToToken(tokens: kuromoji.IpadicFeatures[] | database.Token[], tokensNegaposi?: number): database.Token[] {
  if (implementsTokens(tokens)) return tokens;

  let result: database.Token[] = [];

  tokens.forEach((word) => {
    let tokenNegaposi: number | undefined;

    if (typeof tokensNegaposi === "number") {
      tokenNegaposi = tokensNegaposi / tokens.length;
    }

    let databaseToken: database.Token = {
      id: `tkn-${database.generateId()}`,
      text: word.surface_form,
      pos: word.pos,
      pos_detail_1: word.pos_detail_1,
      pos_detail_2: word.pos_detail_2,
      pos_detail_3: word.pos_detail_3,
      conjugated_type: word.conjugated_type,
      conjugated_form: word.conjugated_form,
      basic_form: word.basic_form,
      group: [],
      raw_data: word,
      negaposi: tokenNegaposi
    };

    result[result.length] = databaseToken;
  });

  return result;
}

export function convertTokensToString(tokens: database.Token[]): string {
  let result = "";

  tokens.forEach((token) => {
    result += token.text;
  });

  return result;
}

export function convertTokensIdToTokens(tokensId: string[]): database.Token[] {
  let result: database.Token[] = [];

  for (let i = 0; i < tokensId.length; i++) {
    result[result.length] = getTokensByIdFromDatabase(tokensId[i]);
  }

  return result;
}

export function generateUnkToken(base: database.Token = unkToken): database.Token {
  base.pos_detail_3 += "／置換可能";
  return base;
}

export const unkToken: database.Token = {
  id: "tkn-unknown",
  text: "unknown",
  pos: "unknown",
  pos_detail_1: "*",
  pos_detail_2: "*",
  pos_detail_3: "*",
  conjugated_type: "*",
  conjugated_form: "*",
  basic_form: "*",
  group: [],
  raw_data: {},
  negaposi: 0
};

export const getTokensNegaposi = negaposi.getTokensNegaposi;