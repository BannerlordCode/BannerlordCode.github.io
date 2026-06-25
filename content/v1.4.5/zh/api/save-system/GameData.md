---
title: "GameData"
description: "GameData 的自动生成类参考。"
---
# GameData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class GameData`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/GameData.cs`

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

**用途 / Purpose:** 处理与 「inspect」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GameData 实例
GameData gameData = ...;
gameData.Inspect();
```

### CreateFrom
`public static GameData CreateFrom(byte readBytes)`

**用途 / Purpose:** 构建一个新的 「from」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
GameData.CreateFrom(0);
```

### GetData
`public byte GetData()`

**用途 / Purpose:** 读取并返回当前对象中 「data」 的结果。

```csharp
// 先通过子系统 API 拿到 GameData 实例
GameData gameData = ...;
var result = gameData.GetData();
```

### Write
`public static void Write(System.IO.BinaryWriter writer, GameData gameData)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 静态调用，不需要实例
GameData.Write(writer, gameData);
```

### Read
`public static GameData Read(System.IO.BinaryReader reader)`

**用途 / Purpose:** 读取当前对象的数据或状态。

```csharp
// 静态调用，不需要实例
GameData.Read(reader);
```

### IsEqualTo
`public bool IsEqualTo(GameData gameData)`

**用途 / Purpose:** 判断当前对象是否处于 「equal to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 GameData 实例
GameData gameData = ...;
var result = gameData.IsEqualTo(gameData);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
GameData entry = ...;
```

## 参见

- [本区域目录](../)