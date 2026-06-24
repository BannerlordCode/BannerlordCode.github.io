<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkSelection`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkSelection

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class MPPerkSelection`
**领域:** mission-ext

## 概述

`MPPerkSelection` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MPPerkSelectionManager Instance { get; }` |

## 主要方法

### FreeInstance
`public static void FreeInstance()`

**用途 / Purpose:** 处理 `free instance` 相关逻辑。

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**用途 / Purpose:** 初始化 `for user` 的状态、资源或绑定。

### ResetPendingChanges
`public void ResetPendingChanges()`

**用途 / Purpose:** 将 `pending changes` 重置为初始状态。

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**用途 / Purpose:** 尝试获取 `to apply and save pending changes`，通常以 out 参数返回结果。

### GetSelectionsForHeroClass
`public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**用途 / Purpose:** 获取 `selections for hero class` 的当前值。

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)`

**用途 / Purpose:** 设置 `selections for hero class temporarily` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MPPerkSelection.FreeInstance();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
