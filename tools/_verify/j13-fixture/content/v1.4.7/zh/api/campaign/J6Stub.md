---
title: "J6Stub"
description: "J6 判据的负向对照：示例只有 new X(...)，没有真实 .Method( 调用。"
---
# J6Stub

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J6Stub`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
本夹具专门打 `J6=stub (no-real-example)`：示例里**只有 `new X(...)`**，没有一次真实 `.Method(` 调用。
判分器的 `hasRealCsharpExample` 要求代码块里出现 `.方法名(`，构造不算 ⇒ 必须判 stub。

## 心智模型
把它想成一把**只认方法调用的尺**：`new X(...)` 是构造、`x.Prop` 是属性访问，两者都不能证明这段示例真的能跑通一条调用链。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J6Stub.md
```
期望：`J6=stub` ⇒ 第⑤条红。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `Count` | 夹具用（TroopRoster.cs:54）。 |
| `VersionNo` | 夹具用（TroopRoster.cs:66）。 |
| `TotalRegulars` | 夹具用（TroopRoster.cs:70）。 |

## 真实示例
```csharp
// 故意只有构造，没有 .Method( 调用
TroopRoster roster = new TroopRoster();
int n = 0;
```

## 参见
- [TroopRoster](../J13GateControl5)
- [PartyBase](../J13GateControl5)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
