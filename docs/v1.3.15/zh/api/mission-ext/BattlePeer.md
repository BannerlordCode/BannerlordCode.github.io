<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattlePeer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePeer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePeer`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs`

## 概述

`BattlePeer` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Name` | `public string Name { get; }` |
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `TeamNo` | `public int TeamNo { get; }` |
| `BattleJoinType` | `public BattleJoinType BattleJoinType { get; }` |
| `Quit` | `public bool Quit { get; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `SessionKey` | `public int SessionKey { get; }` |
| `QuitType` | `public BattlePeerQuitType QuitType { get; }` |

## 主要方法

### Rejoin
`public void Rejoin(int teamNo)`

**用途 / Purpose:** 处理 `rejoin` 相关逻辑。

### InitializeSession
`public void InitializeSession(int index, int sessionKey)`

**用途 / Purpose:** 初始化 `session` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new BattlePeer();
value.Rejoin(0);
```

## 参见

- [完整类目录](../catalog)