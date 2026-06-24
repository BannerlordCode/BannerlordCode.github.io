<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameKeyOptionVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**Base:** `KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs`

## 概述

`GameKeyOptionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentGameKey` | `public GameKey CurrentGameKey { get; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Set
`public override void Set(InputKey newKey)`

**用途 / Purpose:** 设置 `set` 的值或状态。

### Update
`public override void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnDone
`public override void OnDone()`

**用途 / Purpose:** 当 `done` 事件触发时调用此方法。

### Revert
`public void Revert()`

**用途 / Purpose:** 处理 `revert` 相关逻辑。

### Apply
`public void Apply()`

**用途 / Purpose:** 将 `apply` 应用到当前对象。

## 使用示例

```csharp
var value = new GameKeyOptionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)