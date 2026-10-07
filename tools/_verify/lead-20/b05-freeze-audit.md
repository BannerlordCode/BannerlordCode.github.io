# b05 冻结完整性审计 — 证据包（lead-20，只读复核）

生成时刻：2026-10-07T10:08Z 起 · 全部读数取自磁盘与 git，未修改任何判据文件。

---

## 结论（先说，含对本线先前报告的更正）

**本线先前报告「b05 冻结读数不可复现、冻结不成立」—— 该结论错误，现予更正。**

```
b05 五页在【三个已提交的尺版本】下全部 pass=5/5：
  da1dfa7461  sha256_16=127ee75ae9c20d93   （b05 冻结时钉的那把）  → 5/5
  984a6cc155  sha256_16=ec583b0bb84b22ea   （标着 effective from b06）→ 5/5
  b8c7c9e1c6092cbb（当前盘上）                                     → 5/5
⇒ 【冻结的判决是可复现的。b05 的冻结宣告成立，不需要重判。】
```

**真正发生的事**：在 09:04–09:05Z 之间，盘上的尺是一个 **`sha256_16=3dc897bc91f672dd` 的工作区状态，它从未进入 git**，
而它当时对 b05 给出 `pass=4/5`（FAIL `ActionCampaignOptionData.md`，`✗ J4 unattributable-bare=6`）。
**⇒ 缺陷类型不是「冻结被推翻」，而是「一个无版本记录的尺版本被判用于已冻结批次」。**

---

## ① 两个（实为三个）尺版本的完整身份

| 版本 | commit | commit 时刻 | bytes | full sha256 |
|---|---|---|---|---|
| `127ee75ae9c20d93` | `da1dfa7461` | 2026-10-07T16:30:54 | 28048 | `127ee75ae9c20d938da532e9dab04a3d05c094e1413e34b3318c824c1749a672` |
| `ec583b0bb84b22ea` | `984a6cc155` | 2026-10-07T17:03:19 | 32136 | `ec583b0bb84b22eabe61294c8f67a1a0db0df028be4c1878e901ad5c970f6745` |
| `b8c7c9e1c6092cbb` | `1b3d36fe0d` | 2026-10-07T18:06:39 | 43167 | `b8c7c9e1c6092cbb1a6d78280f079a6d9f75ea94ed45c29c7c9635459af68649` |
| **`3dc897bc91f672dd`** | **（无）** | **（无）** | — | **不在任何 commit 中** |

**命令**：
```bash
git show da1dfa7461:tools/_verify/lead-145zh-judge.mjs | sha256sum
git show 984a6cc155:tools/_verify/lead-145zh-judge.mjs | sha256sum
git log --format=%h -- tools/_verify/lead-145zh-judge.mjs   # 逐版本比对，3dc897bc 未出现
```

**判分器提交史（16 个版本 / ~3.5 小时）**：
```
14:35:19 0fb24a1cadf63a45   15:15:33 445a8a2694e5bf87   16:21:52 de0720022f13c2ea   17:14:02 6ac3a08622bc097c   18:03:52 99993a09ead2377a
14:53:21 199874922920c9ce   15:31:28 e2ea8f7f73ec1b68   16:30:54 127ee75ae9c20d93   17:19:38 7436474b1b66f515   18:06:39 b8c7c9e1c6092cbb
                            15:42:57 05c2a522adbc1183   17:03:19 ec583b0bb84b22ea   17:27:20 066a4779aafa6d1d
                            15:46:59 d844164e7bd02c58   17:07:28 ff5e35e7b60cb811   17:38:26 bc05c1c74ebcaeb2
```

---

## ② 哪一页在两个状态下判决不同 + 判据明细差异

```
page: content/v1.4.5/zh/api/campaign-ext/ActionCampaignOptionData.md

在 3dc897bc（未提交的工作区状态）：
  FAIL  ✗ J4 unattributable-bare=6（本块内无完整引用且全文有多个 .cs ⇒ 无法归属，不猜）

在 127ee75a / ec583b0b / b8c7c9e1（三个已提交版本）：
  PASS  该页无 J4 报错
```
**⇒ 差异项是 `J4`（裸引用无法归属时的处置）**，不是 J3 归属、不是 J2/J10、不是 J12。
**⇒ 本线判读**：`3dc897bc` 是「J4 收窄为硬失败」的**中间工作区状态**；`ec583b0b`（其后的正式提交）**并未保留该行为对 b05 的影响**。
（另：`ec583b0b` 的提交信息为 `feat(lead-145zh-judge): declared-schema judging and J12, effective from b06`。）

---

## ③ 两次跑的是同一组 5 个文件（附逐文件 sha256）

```
content/v1.4.5/zh/api/campaign-ext/AchievementsCampaignBehavior.md   13391 B  cd9b88ffbe1c7edc
content/v1.4.5/zh/api/campaign-ext/ActionCampaignOptionData.md        8723 B  af25a2e0566b7bf6
content/v1.4.5/zh/api/campaign-ext/ActionNotes.md                     7705 B  a57dca7c3ef6c429
content/v1.4.5/zh/api/campaign-ext/Add1000GoldCheat.md                5533 B  0fbf146df6654d58
content/v1.4.5/zh/api/campaign-ext/Add100InfluenceCheat.md            5864 B  34d1b8d4f73ede32
```
⇒ 与 b05 冻结宣告（#14881，冻结时刻 08:58Z）所列 5 页 sha256 **逐一致** ⇒ **不是「混合快照」，不是文件集不同。**

---

## ④ 归类（Boss 给的 a/b/c，加一个 d）

```
(a) lead-18 改尺确实影响 b05 ⇒ 冻结宣告不成立        —— 【不成立】三个已提交版本均为 5/5
(b) 我拿到的是更晚一版、未做中立性证明就生效          —— 【部分成立】，但该版【从未提交】
(c) 我跑的文件/批次与冻结清单不一致                   —— 【不成立】文件集与 sha256 逐一致
(d) ★ 冻结宣告之后，盘上的尺曾被改成一个【从未进入 git 的工作区状态】，
    且用它对已冻结批次出了判决                        —— 【成立】
```
**⇒ 判定为 (d)。** 处置：**b05 冻结无需重判**（已提交版本复现 5/5）；
但**流程缺口必须补**：判据文件的**工作区改动不得用于产出对外的批次判决**。

---

## ⑤ 本线自身的一处归因错误（一并更正）

本线早先写「现在盘上的尺：`3dc897bc91f672dd`（commit `984a6cc155`）」——
**这是【推断】而非【验证】**：`984a6cc155` 的 blob 实为 `ec583b0bb84b22ea`。
**⇒ 这正是本线今日提给 Boss 的通则「任何把 A 的读数用到 B 上的判据，必须先证明 A 就是 B」——
本线自己在同一天犯了它。** 已记入台账。

---

## ⑥ 可复用判据（Boss 批准写进判据文档）

```
① 【改尺后必须复跑最近一批已冻结的批次并与冻结宣告对账】
     一致 ⇒ 记一行「新尺复现旧判决」；不一致 ⇒ 该批按新尺重判 + 重宣告
② 【「对 b0N 及以后生效」必须与【实际行为】一致】
     改尺后要么旧批次不再被这把尺判，要么明确写「本批按新尺重判」；二者必居其一
③ ★ 本线补充：【判据文件的未提交工作区状态，不得用于产出对外判决】
     理由：本事故中 3dc897bc 从未进入 git，却对已冻结批次出了 4/5 的判决 ——
     无版本记录的尺 = 无归属的读数。
```
**⇒ 通则**：**「读数必须附尺 sha」只解决了一半；还必须保证【那个 sha 能取回】且【用于出判决的尺是被提交过的】。**
