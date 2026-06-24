<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveHandler`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SaveHandler

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SaveHandler`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/SaveHandler.cs`

## 概述

`SaveHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SaveHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; }` |
| `IronmanModSaveName` | `public string IronmanModSaveName { get; }` |
| `AutoSaveInterval` | `public int AutoSaveInterval { get; }` |

## 主要方法

### QuickSaveCurrentGame
`public void QuickSaveCurrentGame()`

**用途 / Purpose:** 处理 `quick save current game` 相关逻辑。

### SaveAs
`public void SaveAs(string saveName)`

**用途 / Purpose:** 保存 `as` 数据。

### CampaignTick
`public void CampaignTick()`

**用途 / Purpose:** 处理 `campaign tick` 相关逻辑。

### SignalAutoSave
`public void SignalAutoSave()`

**用途 / Purpose:** 处理 `signal auto save` 相关逻辑。

### GetSaveMetaData
`public CampaignSaveMetaDataArgs GetSaveMetaData()`

**用途 / Purpose:** 获取 `save meta data` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new SaveHandler());
```

## 参见

- [完整类目录](../catalog)