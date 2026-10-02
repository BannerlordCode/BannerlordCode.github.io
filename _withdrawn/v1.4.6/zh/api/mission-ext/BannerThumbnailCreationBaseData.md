---
title: "BannerThumbnailCreationBaseData"
description: "BannerThumbnailCreationBaseData：TaleWorlds.MountAndBlade.View.Tableaus 的 public 类，继承 ThumbnailCreationData；公开成员 5 个（方法 0、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerThumbnailCreationBaseData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class BannerThumbnailCreationBaseData : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BannerThumbnailCreationBaseData 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs。它是一个 public 类（abstract），实现/继承 ThumbnailCreationData，继承链为 BannerThumbnailCreationBaseData → ThumbnailCreationData。public/protected 成员共 5 个：4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerThumbnailCreationBaseData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Tableaus`，继承链 BannerThumbnailCreationBaseData → ThumbnailCreationData。成员构成以属性为主（属性 4/5，方法 0/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Banner` | `public Banner Banner` | 属性 |
| `DebugInfo` | `public BannerDebugInfo DebugInfo` | 属性 |
| `IsTableauOrNineGrid` | `public bool IsTableauOrNineGrid` | 属性 |
| `IsLarge` | `public bool IsLarge` | 属性 |
| `BannerThumbnailCreationBaseData` | `public BannerThumbnailCreationBaseData(Banner banner, Action<Texture>setAction, Action cancelAction, BannerDebugInfo debugInfo, bool isTableauOrNineGrid, bool isLarge) : base("", setAction, cancelAction)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ThumbnailCreationData](../ThumbnailCreationData/)
- [同命名空间 BannerTableau](../BannerTableau/)
- [同命名空间 BasicCharacterTableau](../BasicCharacterTableau/)
- [同命名空间 BrightnessDemoTableau](../BrightnessDemoTableau/)
- [同命名空间 CharacterTableau](../CharacterTableau/)
