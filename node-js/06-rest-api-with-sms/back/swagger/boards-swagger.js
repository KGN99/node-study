/**
 * @openapi
 * /boards:
 *   get:
 *     summary: 게시글 조회
 *     responses:
 *       200:
 *         description: 조회 성공!
 *         content:
 *             application/json:
 *                 schema:
 *                     type: array
 *                     items:
 *                         properties:
 *                             number:
 *                                 type: int
 *                             writer:
 *                                 type: string
 *                                 example: 철수
 *                             title:
 *                                 type: string
 *                                 example: 제목
 *                             contents:
 *                                 type: string
 *                                 example: 내용
 */

/**
 * @openapi
 * /boards:
 *   post:
 *     summary: 게시글 작성
 *     responses:
 *       200:
 *         description: 작성 성공!
 */
