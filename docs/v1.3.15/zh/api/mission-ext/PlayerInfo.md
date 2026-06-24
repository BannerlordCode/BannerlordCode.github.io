<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerInfo`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/PlayerInfo.cs`

## 概述

`PlayerInfo` 位于 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `Username` | `public string Username { get; set; }` |
| `ForcedIndex` | `public int ForcedIndex { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Death` | `public int Death { get; set; }` |
| `Assist` | `public int Assist { get; set; }` |

## 主要方法

### HasSameContentWith
`public bool HasSameContentWith(PlayerInfo other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

## 使用示例

```csharp
var value = new PlayerInfo();
value.HasSameContentWith(other);
```

## 参见

- [完整类目录](../catalog)