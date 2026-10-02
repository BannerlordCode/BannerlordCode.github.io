---
title: "CharacterTableau"
description: "CharacterTableau：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 33 个（方法 28、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs。"
---
# CharacterTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterTableau`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs`

## 概述

CharacterTableau 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs。它是一个 public 类，继承链为 CharacterTableau。public/protected 成员共 33 个：28 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterTableau 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus），继承链 CharacterTableau。成员构成以方法为主（方法 28/33，属性 4/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | 属性 |
| `IsRunningCustomAnimation` | `public bool IsRunningCustomAnimation` | 属性 |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | 属性 |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | 属性 |
| `CharacterTableau` | `public CharacterTableau()` | 构造函数 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `GetCustomAnimationProgressRatio` | `public float GetCustomAnimationProgressRatio()` | 方法 |
| `SetEnabled` | `public void SetEnabled(bool enabled)` | 方法 |
| `SetLeftHandWieldedEquipmentIndex` | `public void SetLeftHandWieldedEquipmentIndex(int index)` | 方法 |
| `SetRightHandWieldedEquipmentIndex` | `public void SetRightHandWieldedEquipmentIndex(int index)` | 方法 |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | 方法 |
| `SetCharStringID` | `public void SetCharStringID(string charStringId)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `SetBodyProperties` | `public void SetBodyProperties(string bodyPropertiesCode)` | 方法 |
| `SetStanceIndex` | `public void SetStanceIndex(int index)` | 方法 |
| `SetCustomRenderScale` | `public void SetCustomRenderScale(float value)` | 方法 |
| `SetIsFemale` | `public void SetIsFemale(bool isFemale)` | 方法 |
| `SetIsBannerShownInBackground` | `public void SetIsBannerShownInBackground(bool isBannerShownInBackground)` | 方法 |
| `SetRace` | `public void SetRace(int race)` | 方法 |
| `SetIdleAction` | `public void SetIdleAction(string idleAction)` | 方法 |
| `SetCustomAnimation` | `public void SetCustomAnimation(string animation)` | 方法 |
| `StartCustomAnimation` | `public void StartCustomAnimation()` | 方法 |
| `StopCustomAnimation` | `public void StopCustomAnimation()` | 方法 |
| `SetIdleFaceAnim` | `public void SetIdleFaceAnim(string idleFaceAnim)` | 方法 |
| `SetEquipmentCode` | `public void SetEquipmentCode(string equipmentCode)` | 方法 |
| `SetIsEquipmentAnimActive` | `public void SetIsEquipmentAnimActive(bool value)` | 方法 |
| `SetMountCreationKey` | `public void SetMountCreationKey(string value)` | 方法 |
| `SetBannerCode` | `public void SetBannerCode(string value)` | 方法 |
| `SetArmorColor1` | `public void SetArmorColor1(uint clothColor1)` | 方法 |
| `SetArmorColor2` | `public void SetArmorColor2(uint clothColor2)` | 方法 |
| `RotateCharacter` | `public void RotateCharacter(bool value)` | 方法 |
| `TriggerCharacterMountPlacesSwap` | `public void TriggerCharacterMountPlacesSwap()` | 方法 |
| `OnCharacterTableauMouseMove` | `public void OnCharacterTableauMouseMove(int mouseMoveX)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerTableau](../BannerTableau)
- [同命名空间 BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData)
- [同命名空间 BasicCharacterTableau](../BasicCharacterTableau)
- [同命名空间 BrightnessDemoTableau](../BrightnessDemoTableau)
