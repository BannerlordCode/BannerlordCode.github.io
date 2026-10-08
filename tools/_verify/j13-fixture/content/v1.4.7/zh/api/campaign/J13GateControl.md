---
title: "J13GateControl"
description: "J13 硬门禁的【负向对照夹具】——故意引用空行/纯注释/纯标点行。它不是文档页，不参与文档树。"
---
# J13GateControl

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J13GateControl`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 1 行）

## 概述
这是 `tools/_verify/j13-fixture/` 下的**负向对照夹具**，用来证明 `tools/_verify/j13-hard-gate.mjs` 真的会红。
它的引用行是**故意**挑的：`TroopRoster.cs:9` / `:20` / `:12` / `:15` / `:11` 在源文件里分别是空行、纯注释、纯标点。
判分器把 J13 当警告 ⇒ 这种页仍可能拿到 deep_pass；本夹具就是「机械门禁全绿、引用为假」的最小复现。

## 心智模型
把这份夹具想成一把**校验过的坏尺**：如果硬门禁在它上面返回 PASS，那么门禁本身是坏的。
对照必须先证明自己生效过 —— 一个没生效的对照，和一个干净的正向对照，输出看起来一模一样。

## 怎么用
把五个引用行放进「关键成员」里，然后跑：
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J13GateControl.md
```
期望：`RESULT: FAIL` 且 exit code = 1。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `SomeMember` | 夹具用：故意指向空行（TroopRoster.cs:9）。 |
| `OtherMember` | 夹具用：故意指向空行（TroopRoster.cs:20）。 |
| `CommentMember` | 夹具用：故意指向纯注释（TroopRoster.cs:12）。 |
| `CommentMember2` | 夹具用：故意指向纯注释（TroopRoster.cs:15）。 |
| `PunctMember` | 夹具用：故意指向纯标点（TroopRoster.cs:11）。 |

## 真实示例
```csharp
// 夹具不是真实示例；这 4 行只是为了满足「有 csharp 块」这个形态
int fixtureA = 1;
int fixtureB = fixtureA + 1;
int fixtureC = fixtureB + 1;
int fixtureD = fixtureC + 1;
```

## 参见
- [TroopRoster](../TroopRoster)
- [PartyBase](../PartyBase)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
