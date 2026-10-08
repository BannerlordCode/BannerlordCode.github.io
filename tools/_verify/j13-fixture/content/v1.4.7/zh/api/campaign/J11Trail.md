---
title: "J11Trail"
description: "J11 判据的负向对照：叶子目标带了尾斜杠。"
---
# J11Trail

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J11Trail`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
本夹具专门打 `J11 trailSlash>0`：`## 参见` 里的目标写成了 `../J13GateControl5/`（带尾斜杠），
而 `J13GateControl5.md` 是一个**叶子页** —— 叶子目标不该带尾斜杠（节索引才带）。

## 心智模型
把它想成「把文件当目录指」：链接能解析、页面能打开，但形态是错的 —— 静态站里它会多走一次重定向。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J11Trail.md
```
期望：`J11 trailSlash=1` ⇒ 第⑦条红。

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
- [TroopRoster](../J13GateControl5/)
- [PartyBase](../J13GateControl5)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
