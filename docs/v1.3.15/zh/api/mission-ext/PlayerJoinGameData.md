<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerJoinGameData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerJoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`

## 概述

`PlayerJoinGameData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PlayerJoinGameData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PartyId` | `public Guid? PartyId { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `IpAddress` | `public string IpAddress { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new PlayerJoinGameData();
```

## 参见

- [完整类目录](../catalog)