<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGenPropertyVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FaceGenPropertyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator/FaceGenPropertyVM.cs`

## 概述

`FaceGenPropertyVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeyTimePoint` | `public int KeyTimePoint { get; set; }` |
| `Min` | `public float Min { get; set; }` |
| `TabID` | `public int TabID { get; set; }` |
| `Max` | `public float Max { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Randomize
`public void Randomize()`

**用途 / Purpose:** 处理 `randomize` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### AddCommand
`public void AddCommand()`

**用途 / Purpose:** 向当前集合/状态中添加 `command`。

## 使用示例

```csharp
var value = new FaceGenPropertyVM();
value.Reset();
```

## 参见

- [完整类目录](../catalog)