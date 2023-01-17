import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type BoardReturn {
        number: Int
        writer: String
        title: String
        contents: String
    }
    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }
    type Query {
        fetchBoards: [BoardReturn]
    }
    type Mutation {
        createBoard(writer: String, title: String, contents: String): String
        createBoard2(createBoardInput: CreateBoardInput): String
    }
`;

const resolvers = {
    Query: {
        fetchBoards: () => {
            // 1. 데이터를 조회
            const result = [
                {
                    number: 1,
                    writer: "철수",
                    title: "제목입니다.",
                    contents: "철수 내용",
                },
                {
                    number: 2,
                    writer: "영희",
                    title: "제목입니다.",
                    contents: "영희 내용",
                },
                {
                    number: 3,
                    writer: "훈이",
                    title: "제목입니다.",
                    contents: "훈이 내용",
                },
            ];
            // 2. 결과 응답
            return result;
        },
    },
    Mutation: {
        createBoard: (_, args) => {
            // 1. 데이터를 등록
            console.log(args);
            // 2. 저장 결과 응답
            return "완료";
        },
        createBoard2: (_, args) => {
            // 1. 데이터를 등록
            console.log(args);
            // 2. 저장 결과 응답
            return "완료";
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(3001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
