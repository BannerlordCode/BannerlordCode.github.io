---
title: "J7Marker"
description: "J7 判据的负向对照：正文含生成标记串。"
---
# J7Marker

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J7Marker`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
本夹具专门打 `J7 markers>0`：正文里含生成标记串（的自动生成类参考）。

## 心智模型
把它想成「自动档的指纹」：即使内容看起来像深页，只要带上生成标记，就该被挡在人工页之外。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J7Marker.md
```
期望：`J7 markers>0` ⇒ 第⑨条红。

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
