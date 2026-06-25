---
title: "CampaignOptionsManager"
description: "CampaignOptionsManager 的自动生成类参考。"
---
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignOptionsManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsManager.cs`

## 概述

`CampaignOptionsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignOptionsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetOptionWithIdExists
`public static bool GetOptionWithIdExists(string identifier)`

**用途 / Purpose:** 读取并返回当前对象中 option with id exists 的结果。

```csharp
// 静态调用，不需要实例
CampaignOptionsManager.GetOptionWithIdExists("example");
```

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
CampaignOptionsManager.Initialize();
```

### ClearCachedOptions
`public static void ClearCachedOptions()`

**用途 / Purpose:** 清空当前对象中的cached options。

```csharp
// 静态调用，不需要实例
CampaignOptionsManager.ClearCachedOptions();
```

### GetGameplayCampaignOptions
`public static List<ICampaignOptionData> GetGameplayCampaignOptions()`

**用途 / Purpose:** 读取并返回当前对象中 gameplay campaign options 的结果。

```csharp
// 静态调用，不需要实例
CampaignOptionsManager.GetGameplayCampaignOptions();
```

### GetCharacterCreationCampaignOptions
`public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**用途 / Purpose:** 读取并返回当前对象中 character creation campaign options 的结果。

```csharp
// 静态调用，不需要实例
CampaignOptionsManager.GetCharacterCreationCampaignOptions();
```

## 使用示例

```csharp
var manager = CampaignOptionsManager.Current;
```

## 参见

- [本区域目录](../)