<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveHandler

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SaveHandler`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/SaveHandler.cs`

## 概述

`SaveHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要属性

| Name | Signature |
|------|-----------|
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; }` |
| `IronmanModSaveName` | `public string IronmanModSaveName { get; }` |
| `AutoSaveInterval` | `public int AutoSaveInterval { get; }` |

## 主要方法

### QuickSaveCurrentGame
```csharp
public void QuickSaveCurrentGame()
```

### SaveAs
```csharp
public void SaveAs(string saveName)
```

### CampaignTick
```csharp
public void CampaignTick()
```

### SignalAutoSave
```csharp
public void SignalAutoSave()
```

### ForceAutoSave
```csharp
public void ForceAutoSave()
```

### GetSaveMetaData
```csharp
public CampaignSaveMetaDataArgs GetSaveMetaData()
```

## 使用示例

```csharp
// SaveHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new SaveHandler());
```

## 参见

- [完整类目录](../catalog)