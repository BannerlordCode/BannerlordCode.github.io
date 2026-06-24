<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AuxiliaryKeyGroupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AuxiliaryKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AuxiliaryKeyGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs`

## 概述

`AuxiliaryKeyGroupVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HotKeys` | `public MBBindingList<AuxiliaryKeyOptionVM> HotKeys { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnDone
`public void OnDone()`

**用途 / Purpose:** 当 `done` 事件触发时调用此方法。

### OnGamepadActiveStateChanged
`public void OnGamepadActiveStateChanged()`

**用途 / Purpose:** 当 `gamepad active state changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new AuxiliaryKeyGroupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)