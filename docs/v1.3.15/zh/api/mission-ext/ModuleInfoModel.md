<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleInfoModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleInfoModel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ModuleInfoModel`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs`

## 概述

`ModuleInfoModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel())` 注册，以改变其计算逻辑。

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
```csharp
public static bool ShouldIncludeInSession(ModuleInfo moduleInfo)
```

### TryCreateForSession
```csharp
public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)
```

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## 使用示例

```csharp
// ModuleInfoModel (Model) 的典型用法
Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel());
```

## 参见

- [完整类目录](../catalog)