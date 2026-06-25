---
title: "PlayerBattleInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerBattleInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerBattleInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerBattleInfo`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs`

## 概述

`PlayerBattleInfo` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `JoinType` | `public BattleJoinType JoinType { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |

## 主要方法

### Flee
`public void Flee()`

**用途 / Purpose:** 处理 `flee` 相关逻辑。

### Disconnect
`public void Disconnect()`

**用途 / Purpose:** 处理 `disconnect` 相关逻辑。

### Initialize
`public void Initialize(int peerIndex)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RejoinBattle
`public void RejoinBattle(int teamNo)`

**用途 / Purpose:** 处理 `rejoin battle` 相关逻辑。

### Clone
`public PlayerBattleInfo Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new PlayerBattleInfo();
value.Flee();
```

## 参见

- [完整类目录](../catalog)