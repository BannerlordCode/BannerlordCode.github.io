---
title: "CharacterData"
description: "CharacterData 的自动生成类参考。"
---
# CharacterData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## 概述

`CharacterData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CharacterData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ExportCharacter
`public static void ExportCharacter(Hero hero, string path)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
CharacterData.ExportCharacter(hero, "example");
```

### ImportCharacter
`public static void ImportCharacter(Hero hero, string path)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
CharacterData.ImportCharacter(hero, "example");
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
CharacterData entry = ...;
```

## 参见

- [本区域目录](../)