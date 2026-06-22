<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedSelectionOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## 概述

`ManagedSelectionOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### GetSelectableOptionsLimit
```csharp
public int GetSelectableOptionsLimit()
```

### GetSelectableOptionNames
```csharp
public IEnumerable<SelectionData> GetSelectableOptionNames()
```

### GetOptionsLimit
```csharp
public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)
```

## 使用示例

```csharp
// ManagedSelectionOptionData (Data) 的典型用法
new ManagedSelectionOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)