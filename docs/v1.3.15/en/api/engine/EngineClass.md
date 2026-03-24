# EngineClass / EngineClass

**Namespace**: TaleWorlds.DotNet
**File**: `bannerlord-1.3.15/TaleWorlds.DotNet/EngineClass.cs`
**Purpose**: Attribute for native type registration, maps C# class to C++ engine type / 原生类型注册属性，用于将 C# 类映射到 C++ 引擎类型

## Overview / 概述

`EngineClass` is an attribute used to mark C# classes that correspond to native C++ engine objects. It inherits from `EngineBaseClass`, which stores the `EngineType` string used to identify the corresponding native engine type.

`EngineClass` 是一个特性（Attribute），用于标记与原生 C++ 引擎对象对应的 C# 类。它继承自 `EngineBaseClass`，后者存储了 `EngineType` 字符串，用于标识对应的原生引擎类型。

## Native Bridge Pattern / 原生桥接模式

Bannerlord uses a layered bridge architecture to connect C# and C++:

```
C++ Native Engine (TaleWorlds.Native.dll)
    ↓ DllImport
C# Managed Code
    ↓ EngineClass attribute registration
C# Wrapper Classes (Skeleton, Scene, GameEntity, etc.)
```

```
C++ 原生引擎 (TaleWorlds.Native.dll)
    ↓ DllImport
C# 托管代码
    ↓ EngineClass 特性注册
C# 包装类 (Skeleton, Scene, GameEntity 等)
```

### Workflow / 工作流程

1. Native engine registers all interface implementations at startup via `SetObjects`
2. `EngineApplicationInterface` holds static references to all interfaces (`ISkeleton`, `IScene`, `IUtil`, etc.)
3. C# classes marked with `[EngineClass]` attribute are automatically registered in `NativeObject` static constructor
4. Native object pointer is stored via `UIntPtr Pointer`

1. 原生引擎在启动时通过 `SetObjects` 注册所有接口实现
2. `EngineApplicationInterface` 持有所有接口的静态引用（`ISkeleton`, `IScene`, `IUtil` 等）
3. 标记了 `[EngineClass]` 特性的 C# 类在 `NativeObject` 静态构造时自动注册
4. 通过 `UIntPtr Pointer` 存储原生对象指针

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| EngineType | `string` | Native engine type identifier (e.g., "rglSkeleton", "rglScene") / 原生引擎类型标识符（如 "rglSkeleton", "rglScene"） |

## Usage Example / 使用示例

```csharp
// Mark this class corresponds to native rglSkeleton type
// 标记此类对应原生 rglSkeleton 类型
[EngineClass("rglSkeleton")]
public sealed class Skeleton : NativeObject
{
    // Internal constructor accepts native pointer
    // 内部构造函数接受原生指针
    internal Skeleton(UIntPtr pointer)
    {
        base.Construct(pointer);
    }
}
```

```csharp
// Another example: Scene corresponds to rglScene
// 另一个示例：Scene 对应 rglScene
[EngineClass("rglScene")]
public sealed class Scene : NativeObject
{
    internal Scene(UIntPtr pointer)
    {
        base.Construct(pointer);
    }
}
```

## Notes / 注意事项

- `[EngineClass]` attribute only accepts one parameter: the string identifier of the native type
- `[EngineClass]` 特性仅接受一个参数：原生类型的字符串标识符
- Classes marked with `[EngineClass]` must inherit from `NativeObject`
- 标记了 `[EngineClass]` 的类必须继承自 `NativeObject`
- Native type identifiers (e.g., "rglSkeleton") must exactly match the type name in C++ engine
- 原生类型标识符（如 "rglSkeleton"）必须与 C++ 引擎中的类型名称完全匹配
- This class is an attribute and does not contain any logic methods
- 此类是特性，不包含任何逻辑方法
