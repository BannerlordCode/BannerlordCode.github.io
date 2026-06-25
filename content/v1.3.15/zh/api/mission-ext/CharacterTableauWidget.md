---
title: "CharacterTableauWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterTableauWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs`

## 概述

`CharacterTableauWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CharacterTableauWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `SwapPlacesButtonWidget` | `public ButtonWidget SwapPlacesButtonWidget { get; set; }` |
| `BodyProperties` | `public string BodyProperties { get; set; }` |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |
| `CharStringId` | `public string CharStringId { get; set; }` |
| `StanceIndex` | `public int StanceIndex { get; set; }` |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `EquipmentCode` | `public string EquipmentCode { get; set; }` |
| `MountCreationKey` | `public string MountCreationKey { get; set; }` |
| `IdleAction` | `public string IdleAction { get; set; }` |
| `IdleFaceAnim` | `public string IdleFaceAnim { get; set; }` |
| `CustomAnimation` | `public string CustomAnimation { get; set; }` |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex { get; set; }` |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex { get; set; }` |
| `ArmorColor1` | `public uint ArmorColor1 { get; set; }` |
| `ArmorColor2` | `public uint ArmorColor2 { get; set; }` |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground { get; set; }` |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |

## 使用示例

```csharp
var widget = new CharacterTableauWidget(context);
```

## 参见

- [完整类目录](../catalog)