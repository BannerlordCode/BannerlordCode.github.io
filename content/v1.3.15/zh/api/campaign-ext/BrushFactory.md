---
title: "BrushFactory"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushFactory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushFactory`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`

## 概述

`BrushFactory` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Brushes` | `public IEnumerable<Brush> Brushes { get; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### LoadBrushFile
`public void LoadBrushFile(string name)`

**用途 / Purpose:** 加载 `brush file` 数据。

### GetBrush
`public Brush GetBrush(string name)`

**用途 / Purpose:** 获取 `brush` 的当前值。

### SaveBrushAs
`public bool SaveBrushAs(string name, Brush brush)`

**用途 / Purpose:** 保存 `brush as` 数据。

### CheckForUpdates
`public void CheckForUpdates()`

**用途 / Purpose:** 处理 `check for updates` 相关逻辑。

## 使用示例

```csharp
var value = new BrushFactory();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)