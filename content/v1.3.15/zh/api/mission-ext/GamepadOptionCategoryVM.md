---
title: "GamepadOptionCategoryVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GamepadOptionCategoryVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadOptionCategoryVM : GroupedOptionCategoryVM`
**Base:** `GroupedOptionCategoryVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs`

## 概述

`GamepadOptionCategoryVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentGamepadType` | `public int CurrentGamepadType { get; set; }` |
| `OtherKeys` | `public MBBindingList<GamepadOptionKeyItemVM> OtherKeys { get; set; }` |
| `DpadKeys` | `public MBBindingList<GamepadOptionKeyItemVM> DpadKeys { get; set; }` |
| `LeftTriggerAndBumperKeys` | `public MBBindingList<GamepadOptionKeyItemVM> LeftTriggerAndBumperKeys { get; set; }` |
| `RightTriggerAndBumperKeys` | `public MBBindingList<GamepadOptionKeyItemVM> RightTriggerAndBumperKeys { get; set; }` |
| `RightAnalogKeys` | `public MBBindingList<GamepadOptionKeyItemVM> RightAnalogKeys { get; set; }` |
| `LeftAnalogKeys` | `public MBBindingList<GamepadOptionKeyItemVM> LeftAnalogKeys { get; set; }` |
| `FaceKeys` | `public MBBindingList<GamepadOptionKeyItemVM> FaceKeys { get; set; }` |
| `Actions` | `public MBBindingList<SelectorVM<SelectorItemVM>> Actions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new GamepadOptionCategoryVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)