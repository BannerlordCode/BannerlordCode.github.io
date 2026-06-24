<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleInfoModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleInfoModel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ModuleInfoModel`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs`

## 概述

`ModuleInfoModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ModuleInfoModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `Version` | `public string Version { get; }` |
| `IsOptional` | `public bool IsOptional { get; }` |

## 主要方法

### ShouldIncludeInSession
`public static bool ShouldIncludeInSession(ModuleInfo moduleInfo)`

**用途 / Purpose:** 处理 `should include in session` 相关逻辑。

### TryCreateForSession
`public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)`

**用途 / Purpose:** 尝试获取 `create for session`，通常以 out 参数返回结果。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel());
```

## 参见

- [完整类目录](../catalog)