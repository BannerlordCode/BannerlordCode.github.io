---
title: "CharacterTableauTextureProvider"
description: "CharacterTableauTextureProvider：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 TextureProvider；公开成员 31 个（方法 4、属性 26、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs。"
---
# CharacterTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class CharacterTableauTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs`

## 概述

CharacterTableauTextureProvider 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs。它是一个 public 类，实现/继承 TextureProvider，继承链为 CharacterTableauTextureProvider → TextureProvider。public/protected 成员共 31 个：4 方法、26 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterTableauTextureProvider 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.TextureProviders），继承链 CharacterTableauTextureProvider → TextureProvider。成员构成以属性为主（属性 26/31，方法 4/31），对外主要以状态读取接口暴露。继承链上的 TextureProvider 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio` | 属性 |
| `BannerCodeText` | `public string BannerCodeText` | 属性 |
| `BodyProperties` | `public string BodyProperties` | 属性 |
| `StanceIndex` | `public int StanceIndex` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `Race` | `public int Race` | 属性 |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground` | 属性 |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive` | 属性 |
| `EquipmentCode` | `public string EquipmentCode` | 属性 |
| `IdleAction` | `public string IdleAction` | 属性 |
| `IdleFaceAnim` | `public string IdleFaceAnim` | 属性 |
| `CurrentlyRotating` | `public bool CurrentlyRotating` | 属性 |
| `MountCreationKey` | `public string MountCreationKey` | 属性 |
| `ArmorColor1` | `public uint ArmorColor1` | 属性 |
| `ArmorColor2` | `public uint ArmorColor2` | 属性 |
| `CharStringId` | `public string CharStringId` | 属性 |
| `TriggerCharacterMountPlacesSwap` | `public bool TriggerCharacterMountPlacesSwap` | 属性 |
| `CustomRenderScale` | `public float CustomRenderScale` | 属性 |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations` | 属性 |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | 属性 |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex` | 属性 |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex` | 属性 |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | 属性 |
| `CustomAnimation` | `public string CustomAnimation` | 属性 |
| `IsTableauEnabled` | `public bool IsTableauEnabled` | 属性 |
| `IsHidden` | `public bool IsHidden` | 属性 |
| `CharacterTableauTextureProvider` | `public CharacterTableauTextureProvider()` | 构造函数 |
| `Clear` | `public override void Clear(bool clearNextFrame)` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | 方法 |
| `Tick` | `public override void Tick(float dt)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerTableauTextureProvider](../BannerTableauTextureProvider)
- [同命名空间 BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider)
- [同命名空间 ItemTableauTextureProvider](../ItemTableauTextureProvider)
- [同命名空间 OnlineImageTextureProvider](../OnlineImageTextureProvider)
