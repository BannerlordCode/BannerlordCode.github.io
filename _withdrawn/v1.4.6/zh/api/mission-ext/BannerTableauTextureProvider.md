---
title: "BannerTableauTextureProvider"
description: "BannerTableauTextureProvider：TaleWorlds.MountAndBlade.GauntletUI.TextureProviders 的 public 类，继承 TextureProvider；公开成员 13 个（方法 4、属性 8、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BannerTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BannerTableauTextureProvider 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs。它是一个 public 类，实现/继承 TextureProvider，继承链为 BannerTableauTextureProvider → TextureProvider。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerTableauTextureProvider 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，继承链 BannerTableauTextureProvider → TextureProvider。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerCodeText` | `public string BannerCodeText` | 属性 |
| `IsNineGrid` | `public bool IsNineGrid` | 属性 |
| `CustomRenderScale` | `public float CustomRenderScale` | 属性 |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual` | 属性 |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual` | 属性 |
| `bool>UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool>UpdateRotationValueManualWithMirror` | 属性 |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate` | 属性 |
| `IsHidden` | `public bool IsHidden` | 属性 |
| `BannerTableauTextureProvider` | `public BannerTableauTextureProvider()` | 构造函数 |
| `Clear` | `public override void Clear(bool clearNextFrame)` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | 方法 |
| `Tick` | `public override void Tick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureProvider](../../gui/TextureProvider/)
- [同命名空间 BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider/)
- [同命名空间 CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [同命名空间 ItemTableauTextureProvider](../ItemTableauTextureProvider/)
- [同命名空间 OnlineImageTextureProvider](../OnlineImageTextureProvider/)
