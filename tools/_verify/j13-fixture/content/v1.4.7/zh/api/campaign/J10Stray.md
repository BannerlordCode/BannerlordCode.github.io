---
title: "J10Stray"
description: "J10 判据的负向对照：概述节里放了一个 markdown 链接。"
---
# J10Stray

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J10Stray`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
本夹具专门打 `J10 stray>0`：**概述这一节里放了一个 markdown 链接** [TroopRoster](../J13GateControl5)。
政策规定链接只允许出现在 `## 参见` 与 `## 导航`，其余位置一律用反引号。

## 心智模型
把它想成「链接越位」：链接本身没错、目标也存在，**错的是它出现的位置** —— 所以断链审计看不见它，只有 J10 能抓。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J10Stray.md
```
期望：`J10 stray=1` ⇒ 第⑥条红。

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
- [PartyBase](../J13GateControl5)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
