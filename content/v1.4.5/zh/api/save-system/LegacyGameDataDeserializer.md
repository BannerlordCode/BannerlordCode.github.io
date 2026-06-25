---
title: "LegacyGameDataDeserializer"
description: "LegacyGameDataDeserializer 的自动生成类参考。"
---
# LegacyGameDataDeserializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class LegacyGameDataDeserializer`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/LegacyGameDataDeserializer.cs`

## 概述

`LegacyGameDataDeserializer` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Deserialize
`public static GameData Deserialize(Stream stream)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 静态调用，不需要实例
LegacyGameDataDeserializer.Deserialize(stream);
```

## 使用示例

```csharp
LegacyGameDataDeserializer.Deserialize(stream);
```

## 参见

- [本区域目录](../)