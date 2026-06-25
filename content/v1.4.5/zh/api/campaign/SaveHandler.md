---
title: "SaveHandler"
description: "SaveHandler 的自动生成类参考。"
---
# SaveHandler

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SaveHandler`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveHandler.cs`

## 概述

`SaveHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SaveHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier { get; set; }` |

## 主要方法

### QuickSaveCurrentGame
`public void QuickSaveCurrentGame()`

**用途 / Purpose:** 处理与 「quick save current game」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SaveHandler 实例
SaveHandler saveHandler = ...;
saveHandler.QuickSaveCurrentGame();
```

### SaveAs
`public void SaveAs(string saveName)`

**用途 / Purpose:** 将 「as」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 SaveHandler 实例
SaveHandler saveHandler = ...;
saveHandler.SaveAs("example");
```

### CampaignTick
`public void CampaignTick()`

**用途 / Purpose:** 推进 「campaign」 状态的周期性更新。

```csharp
// 先通过子系统 API 拿到 SaveHandler 实例
SaveHandler saveHandler = ...;
saveHandler.CampaignTick();
```

### SignalAutoSave
`public void SignalAutoSave()`

**用途 / Purpose:** 处理与 「signal auto save」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SaveHandler 实例
SaveHandler saveHandler = ...;
saveHandler.SignalAutoSave();
```

### ForceAutoSave
`public void ForceAutoSave()`

**用途 / Purpose:** 处理与 「force auto save」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SaveHandler 实例
SaveHandler saveHandler = ...;
saveHandler.ForceAutoSave();
```

### GetSaveMetaData
`public CampaignSaveMetaDataArgs GetSaveMetaData()`

**用途 / Purpose:** 读取并返回当前对象中 「save meta data」 的结果。

```csharp
// 先通过子系统 API 拿到 SaveHandler 实例
SaveHandler saveHandler = ...;
var result = saveHandler.GetSaveMetaData();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SaveHandler>();
```

## 参见

- [本区域目录](../)