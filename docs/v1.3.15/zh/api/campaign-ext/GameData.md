<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class GameData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/GameData.cs`

## 概述

`GameData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `GameData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Header` | `public byte Header { get; set; }` |
| `Strings` | `public byte Strings { get; set; }` |
| `ObjectData` | `public byte ObjectData { get; set; }` |
| `ContainerData` | `public byte ContainerData { get; set; }` |
| `TotalSize` | `public int TotalSize { get; }` |

## 主要方法

### Inspect
`public void Inspect()`

**用途 / Purpose:** 处理 `inspect` 相关逻辑。

### CreateFrom
`public static GameData CreateFrom(byte readBytes)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### GetData
`public byte GetData()`

**用途 / Purpose:** 获取 `data` 的当前值。

### Write
`public static void Write(BinaryWriter writer, GameData gameData)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Read
`public static GameData Read(BinaryReader reader)`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### IsEqualTo
`public bool IsEqualTo(GameData gameData)`

**用途 / Purpose:** 处理 `is equal to` 相关逻辑。

## 使用示例

```csharp
var value = new GameData();
```

## 参见

- [完整类目录](../catalog)