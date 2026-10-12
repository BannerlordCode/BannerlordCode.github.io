---
title: "J13 正向对照探针"
description: "故意混入三种应被 J13 抓到的引用行，以及一条合法声明行，用来证明 J13 真的会失败。"
---

# J13 正向对照探针

**命名空间：** `TaleWorlds.CampaignSystem`
**Type:** `public struct CampaignTime : IComparable<CampaignTime>`
**Source:** `TaleWorlds.CampaignSystem/CampaignTime.cs`

## 概述

这是一个**故意损坏的探针页**，存在的唯一目的是证明 J13 这条判据**真的会在真实缺陷上失败**，而不是一个「从未失败过、因此与没接线无法区分」的检查器。它混入了三种应当被抓到的引用行形态：空行、纯标点行、纯注释行，并混入一条合法声明行作为抑制性对照。

## 心智模型

三种坏形态与一条好形态并列，是为了让「J13 报了几条」这个数字**同时具有阳性与阴性对照**：如果它只报坏的不报好的，说明判据有效；如果它一条都不报，说明这条判据在本树上等于没接线。这是本仓《集成门禁规范》§5「门禁自身的门禁」要求的做法，也是 boss-4 #20633 要求补的检查项。

## 怎么用

不用它。它不面向读者，只面向门禁自检。跑法是让判分器对本页输出 `J13 suspicious-lines`，然后数它报了几条。

## 关键成员

- **坏形态一：空行**（`CampaignTime.cs:8`）— 第 8 行是空行，J13 必须报。
- **坏形态二：纯标点行**（`CampaignTime.cs:10`）— 第 10 行只有一个左花括号，J13 必须报。
- **坏形态三：纯注释行**（`CampaignTime.cs:11`）— 第 11 行是 ILSpy 的 Token 注释，J13 必须报。
- **好形态：真实声明行**（`CampaignTime.cs:12`）— 第 12 行是 `public struct CampaignTime`，J13 不得报它。

## 真实示例

```csharp
// 这一页的示例只为满足判分器的 J9，与 J13 无关
CampaignTime now = CampaignTime.Now;
bool isFuture = now.IsFuture;
string text = now.ToString();
```

## 参见

- ↔ [CampaignTime](../campaign/CampaignTime) — 本探针模仿的页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
