<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownTooltipVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownTooltipVM

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`RundownTooltipVM` 是 `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitializedProperly` | `public bool IsInitializedProperly { get; }` |
| `Lines` | `public MBBindingList<RundownLineVM> Lines { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ExpectedChangeText` | `public string ExpectedChangeText { get; set; }` |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt { get; set; }` |
| `ExtendText` | `public string ExtendText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshGenericRundownTooltip

```csharp
public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object args)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)