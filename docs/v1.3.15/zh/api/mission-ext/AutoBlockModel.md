<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AutoBlockModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs`

## 概述

`AutoBlockModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AutoBlockModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBlockDirection
`public abstract Agent.UsageDirection GetBlockDirection(Mission mission)`

**用途 / Purpose:** 获取 `block direction` 的当前值。

## 使用示例

```csharp
var implementation = new CustomAutoBlockModel();
```

## 参见

- [完整类目录](../catalog)