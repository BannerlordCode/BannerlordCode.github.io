<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Key`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Key

**命名空间:** TaleWorlds.InputSystem
**模块:** TaleWorlds.InputSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Key` 是 `TaleWorlds.InputSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsKeyboardInput` | `public bool IsKeyboardInput { get; }` |
| `IsMouseButtonInput` | `public bool IsMouseButtonInput { get; }` |
| `IsMouseWheelInput` | `public bool IsMouseWheelInput { get; }` |
| `IsControllerInput` | `public bool IsControllerInput { get; }` |
| `InputKey` | `public InputKey InputKey { get; }` |


## 主要方法

### ChangeKey

```csharp
public void ChangeKey(InputKey key)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### IsLeftAnalogInput

```csharp
public static bool IsLeftAnalogInput(InputKey key)
```

### IsLeftBumperOrTriggerInput

```csharp
public static bool IsLeftBumperOrTriggerInput(InputKey key)
```

### IsRightBumperOrTriggerInput

```csharp
public static bool IsRightBumperOrTriggerInput(InputKey key)
```

### IsFaceKeyInput

```csharp
public static bool IsFaceKeyInput(InputKey key)
```

### IsRightAnalogInput

```csharp
public static bool IsRightAnalogInput(InputKey key)
```

### IsDpadInput

```csharp
public static bool IsDpadInput(InputKey key)
```

### GetInputType

```csharp
public static Key.InputType GetInputType(InputKey key)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)