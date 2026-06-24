<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentSiegeMachineVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/DeploymentSiegeMachineVM.cs`

## 概述

`DeploymentSiegeMachineVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; set; }` |
| `Type` | `public int Type { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `BreachedText` | `public string BreachedText { get; set; }` |
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsInFront` | `public bool IsInFront { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### CalculatePosition
`public void CalculatePosition()`

**用途 / Purpose:** 处理 `calculate position` 相关逻辑。

### RefreshPosition
`public void RefreshPosition()`

**用途 / Purpose:** 刷新 `position` 的显示或缓存。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**用途 / Purpose:** 执行 `focus begin` 操作或流程。

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**用途 / Purpose:** 执行 `focus end` 操作或流程。

### RefreshWithDeployedWeapon
`public void RefreshWithDeployedWeapon()`

**用途 / Purpose:** 刷新 `with deployed weapon` 的显示或缓存。

## 使用示例

```csharp
var value = new DeploymentSiegeMachineVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)