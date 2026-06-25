---
title: "GameKeyTextExtensions"
description: "GameKeyTextExtensions 的自动生成类参考。"
---
# GameKeyTextExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameKeyTextExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameKeyTextExtensions.cs`

## 概述

`GameKeyTextExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetHotKeyGameText
`public static TextObject GetHotKeyGameText(this GameTextManager gameTextManager, string categoryName, string hotKeyId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hot key game text 的结果。

```csharp
// 静态调用，不需要实例
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", "example");
```

### GetHotKeyGameText
`public static TextObject GetHotKeyGameText(this GameTextManager gameTextManager, string categoryName, int gameKeyId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hot key game text 的结果。

```csharp
// 静态调用，不需要实例
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", 0);
```

### GetHotKeyGameTextFromKeyID
`public static TextObject GetHotKeyGameTextFromKeyID(this GameTextManager gameTextManager, string keyId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hot key game text from key i d 的结果。

```csharp
// 静态调用，不需要实例
GameKeyTextExtensions.GetHotKeyGameTextFromKeyID(gameTextManager, "example");
```

## 使用示例

```csharp
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", "example");
```

## 参见

- [本区域目录](../)