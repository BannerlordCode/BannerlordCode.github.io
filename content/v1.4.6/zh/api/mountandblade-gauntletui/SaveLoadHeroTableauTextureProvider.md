---
title: "SaveLoadHeroTableauTextureProvider"
description: "SaveLoadHeroTableauTextureProvider：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 TextureProvider；公开成员 9 个（方法 4、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs。"
---
# SaveLoadHeroTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class SaveLoadHeroTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs`

## 概述

SaveLoadHeroTableauTextureProvider 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs。它是一个 public 类，实现/继承 TextureProvider，继承链为 SaveLoadHeroTableauTextureProvider → TextureProvider。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveLoadHeroTableauTextureProvider 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.TextureProviders），继承链 SaveLoadHeroTableauTextureProvider → TextureProvider。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。继承链上的 TextureProvider 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroVisualCode` | `public string HeroVisualCode` | 属性 |
| `BannerCode` | `public string BannerCode` | 属性 |
| `IsVersionCompatible` | `public bool IsVersionCompatible` | 属性 |
| `CurrentlyRotating` | `public bool CurrentlyRotating` | 属性 |
| `SaveLoadHeroTableauTextureProvider` | `public SaveLoadHeroTableauTextureProvider()` | 构造函数 |
| `Tick` | `public override void Tick(float dt)` | 方法 |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | 方法 |
| `Clear` | `public override void Clear(bool clearNextFrame)` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerTableauTextureProvider](../BannerTableauTextureProvider)
- [同命名空间 BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider)
- [同命名空间 CharacterTableauTextureProvider](../CharacterTableauTextureProvider)
- [同命名空间 ItemTableauTextureProvider](../ItemTableauTextureProvider)
