---
title: "BasicCharacterTableau"
description: "BasicCharacterTableau 的自动生成类参考。"
---
# BasicCharacterTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicCharacterTableau`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BasicCharacterTableau.cs`

## 概述

`BasicCharacterTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |
| `IsVersionCompatible` | `public bool IsVersionCompatible { get; }` |

## 主要方法

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BasicCharacterTableau 实例
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.OnTick(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BasicCharacterTableau 实例
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BasicCharacterTableau 实例
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.OnFinalize();
```

### DeserializeCharacterCode
`public void DeserializeCharacterCode(string code)`

**用途 / Purpose:** 从序列化数据还原出「character code」。

```csharp
// 先通过子系统 API 拿到 BasicCharacterTableau 实例
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.DeserializeCharacterCode("example");
```

### RotateCharacter
`public void RotateCharacter(bool value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BasicCharacterTableau 实例
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.RotateCharacter(false);
```

### SetBannerCode
`public void SetBannerCode(string value)`

**用途 / Purpose:** 为 「banner code」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BasicCharacterTableau 实例
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.SetBannerCode("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.OnTick(0);
```

## 参见

- [本区域目录](../)