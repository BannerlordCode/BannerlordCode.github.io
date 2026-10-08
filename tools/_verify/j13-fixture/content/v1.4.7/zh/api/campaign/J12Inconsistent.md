---
title: "J12Inconsistent"
description: "J12 判据的负向对照：同一链接文字指向两个不同目标。"
---
# J12Inconsistent

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J12Inconsistent`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
本夹具专门打 `J12 inconsistent-text>0`：同一页里链接文字「TroopRoster」出现了两次，却指向**两个不同目标**。

## 心智模型
把它想成「同名不同人」：读者点两次同名链接却到了两个地方，会以为自己记错了 —— 所以同一页内同名必须同目标。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J12Inconsistent.md
```
期望：`J12 inconsistent-text=1` ⇒ 第⑧条红。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `Count` | 夹具用（TroopRoster.cs:54）。 |
| `VersionNo` | 夹具用（TroopRoster.cs:66）。 |
| `TotalRegulars` | 夹具用（TroopRoster.cs:70）。 |

## 真实示例
```csharp
TroopRoster roster = new TroopRoster();
roster.AddToCounts(null, 1);
int n = roster.Count;
```

## 参见
- [TroopRoster](../J13GateControl5)
- [TroopRoster](../J13GateControl4)
- [PartyBase](../J13GateControl5)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
