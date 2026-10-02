---
title: "ItemTableauTextureProvider"
description: "ItemTableauTextureProvider：TaleWorlds.MountAndBlade.GauntletUI.TextureProviders 的 public 类，继承 TextureProvider；公开成员 17 个（方法 4、属性 12、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class ItemTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ItemTableauTextureProvider 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs。它是一个 public 类，实现/继承 TextureProvider，继承链为 ItemTableauTextureProvider → TextureProvider。public/protected 成员共 17 个：4 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemTableauTextureProvider 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，继承链 ItemTableauTextureProvider → TextureProvider。成员构成以属性为主（属性 12/17，方法 4/17），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemModifierId` | `public string ItemModifierId` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `Item` | `public ItemRosterElement Item` | 属性 |
| `Ammo` | `public int Ammo` | 属性 |
| `AverageUnitCost` | `public int AverageUnitCost` | 属性 |
| `BannerCode` | `public string BannerCode` | 属性 |
| `CurrentlyRotating` | `public bool CurrentlyRotating` | 属性 |
| `RotateItemVertical` | `public float RotateItemVertical` | 属性 |
| `RotateItemHorizontal` | `public float RotateItemHorizontal` | 属性 |
| `InitialTiltRotation` | `public float InitialTiltRotation` | 属性 |
| `InitialPanRotation` | `public float InitialPanRotation` | 属性 |
| `CurrentZoom` | `public float CurrentZoom` | 属性 |
| `ItemTableauTextureProvider` | `public ItemTableauTextureProvider()` | 构造函数 |
| `Clear` | `public override void Clear(bool clearNextFrame)` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | 方法 |
| `Tick` | `public override void Tick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureProvider](../../gui/TextureProvider/)
- [同命名空间 BannerTableauTextureProvider](../BannerTableauTextureProvider/)
- [同命名空间 BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider/)
- [同命名空间 CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [同命名空间 OnlineImageTextureProvider](../OnlineImageTextureProvider/)
