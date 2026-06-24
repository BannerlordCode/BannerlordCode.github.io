<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ControllerEquippedItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ControllerEquippedItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**Base:** `EquipmentActionItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs`

## 概述

`ControllerEquippedItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `DropProgress` | `public float DropProgress { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ControllerEquippedItemVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)