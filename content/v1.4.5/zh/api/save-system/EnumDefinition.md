---
title: "EnumDefinition"
description: "枚举类型的存档定义：只多带两个字段——一个改名用的 Resolver，和一个在构造期用反射读出来的 HasFlags。"
---

# EnumDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class EnumDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem.Definition/EnumDefinition.cs`

## 概述

枚举在存档里**不以数值落盘，而是以成员名字符串落盘**——[VariableSaveData](../VariableSaveData) 的枚举分支先写类型身份再 `writer.WriteString(Value.ToString())`（`:112-113`）。这条设计带来两个后果，恰好就是本类多出来的两个字段：一是改名会破坏旧档，需要一个钩子把旧名映射到新值；二是名字可能在新版本里不存在，需要知道这个枚举是不是 `Flags` 才能决定「未知名字也照样解析」。于是 `EnumDefinition` 只有两个 `readonly` 字段——`Resolver`（[IEnumResolver](../IEnumResolver)）与 `HasFlags`——**其余全继承 [TypeDefinitionBase](../TypeDefinitionBase)，它没有任何成员级信息**。

## 心智模型

把它想成**译名表 + 一个「允许组合」开关**。推论有四条：

1. **`Resolver` 解决的是「改名」而不是「赋值」。** 它挂在枚举定义上，只在**读档**时被调用：第一趟 `Read()` 里若 resolver 存在就把名字换掉（`VariableLoadData.cs:57`），拿到的 `Data` **仍然是字符串**。真正的 `Enum.Parse` 发生在第二趟（`VariableLoadData.cs:120`）。**所以 resolver 的返回值是字符串，不是枚举值。**
2. **`HasFlags` 决定「陌生名字是否也接受」。** 读侧第二趟的判据是 `Enum.IsDefined(type, Data) || enumDefinition.HasFlags`（`VariableLoadData.cs:118`）——**不成立时 `result` 保持 null 并被返回**，字段静默变 null。带 `[Flags]` 的枚举因为第二个条件为真，陌生名字照样进 `Enum.Parse`。**这是「枚举改名」与「Flags 枚举」两种行为分岔的唯一开关。**
3. **`HasFlags` 是构造期一次反射的结果。** 构造器里 `HasFlags = type.GetCustomAttribute<FlagsAttribute>() != null;`（`EnumDefinition.cs:17`）。**所以它读的是类型上的 Attribute 实例，而不是 `Enum.IsDefined(type, value, Flags)` 那种运行时判断**——一个手工加了 `FlagsAttribute` 但值没组合的枚举也会走宽松分支。
4. **两个字段是 `readonly` 字段而不是属性。** `:9`、`:11` 声明为 `public readonly`，不是 `{ get; }`。这与本桶大多数类型的写法不同，但**只读语义是一样的**——不能改。

## 如何使用

### 怎么拿到它

**mod 拿不到类型（`internal`），但会拿到它的两个字段。** 三个入口：

- 定义阶段：在自己的 [SaveableTypeDefiner](../SaveableTypeDefiner) 里 `AddEnumDefinition(typeof(MyEnum), saveId, resolver)`，helper 内部 `new EnumDefinition(type, _saveBaseId + saveId, resolver)`。
- 读档阶段：[VariableLoadData](../VariableLoadData) 的枚举分支用 `SaveId.ReadSaveIdFrom(reader)` + `TryGetTypeDefinition` 反查，然后硬转成 `EnumDefinition`（`:56`）——**如果查回来的其实不是枚举定义，这行会抛 `InvalidCastException`**。
- `DefinitionContext.GetEnumDefinition(Type)`（`DefinitionContext.cs:494`）是按运行时类型取定义的正路。

### 最小可运行片段

```csharp
using System;
using TaleWorlds.SaveSystem.Definition;
using TaleWorlds.SaveSystem.Resolvers;

// 1) 定义（写在自定义 definer 内）
// AddEnumDefinition(typeof(MyEnum), 700, new MyEnumResolver());
// helper 内部：new EnumDefinition(type, saveBaseId + 700, resolver)

// 2) HasFlags 读的是类型上的 Attribute 实例，构造期一次性反射
[Flags]
public enum MyFlags { None = 0, A = 1, B = 2, C = 4 }
Debug.Print("带 FlagsAttribute → HasFlags = true，陌生名字也照样 Parse", 0);

// 3) 读档侧的两步：先 ResolveObject 拿到字符串，再 Enum.Parse
// VariableLoadData.cs:57-59  →  Data = enumDefinition.Resolver.ResolveObject(text);   // 返回字符串
// VariableLoadData.cs:118    →  Enum.IsDefined(type, Data) || enumDefinition.HasFlags → 才 Parse
Debug.Print("Resolver 的返回值是字符串，不是枚举值", 0);
```

### 用它最容易踩的一条

**重命名枚举成员，旧档里用它的字段读回来是 `null`，而且不抛异常。** 因为枚举值以**名字字符串**落盘，读侧先判 `Enum.IsDefined(type, Data) || HasFlags`（`VariableLoadData.cs:118`）——改名后旧名字不再 `IsDefined`，如果那个枚举不是 `[Flags]`，**这个分支整体跳过，`result` 保持 null**，第 132 行原样返回。所以症状是「保存正常、读档正常、那个字段一直是 null」，没有任何异常指向原因。**枚举成员名和字段名一样是存档协议的一部分**；要改名就配一个 [IEnumResolver](../IEnumResolver)。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Resolver` | `public readonly IEnumResolver Resolver;` | `:9`，`readonly` **字段**（不是属性），构造器赋值（`:16`）。**只在读档时用**，见 [VariableLoadData](../VariableLoadData) 的 `enumDefinition?.Resolver != null` 判空（`:57`）与 `ResolveObject(text)`（`:59`）。**注意 `?.` 判空后 `Data` 会退化成原始字符串**（`:63`）——resolver 为 null 是正常路径之一。 |
| `HasFlags` | `public readonly bool HasFlags;` | `:11`，`readonly` 字段。构造器里 `type.GetCustomAttribute<FlagsAttribute>() != null` 一次反射算出（`:17`）。它是 [VariableLoadData](../VariableLoadData) `GetDataToUse` 的判据之一（`:118`）——**决定陌生名字是被静默丢弃还是照样 `Enum.Parse`**。 |
| 构造器 A | `public EnumDefinition(Type type, SaveId saveId, IEnumResolver resolver) : base(type, saveId)` | `:13-18`。主构造器：基类赋 `Type`/`SaveId`/`TypeLevel`，本类赋 `Resolver` 与 `HasFlags`。**不校验 `type` 真的是枚举**——传别的类型进来 `GetCustomAttribute<FlagsAttribute>()` 也不会抛，只是 `HasFlags` 为 false。 |
| 构造器 B | `public EnumDefinition(Type type, int saveId, IEnumResolver resolver) : this(type, new TypeSaveId(saveId), resolver)` | `:20-23`。便利重载，把 `int` 编号包成 `TypeSaveId` 再委托。这是 [SaveableTypeDefiner](../SaveableTypeDefiner) 内部用的形状。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/EnumDefinition.cs:7-24`）：

```csharp
internal class EnumDefinition : TypeDefinitionBase
{
    public readonly IEnumResolver Resolver;
    public readonly bool HasFlags;

    public EnumDefinition(Type type, SaveId saveId, IEnumResolver resolver)
        : base(type, saveId)
    {
        Resolver = resolver;
        HasFlags = type.GetCustomAttribute<FlagsAttribute>() != null;   // 构造期一次反射
    }

    public EnumDefinition(Type type, int saveId, IEnumResolver resolver)
        : this(type, new TypeSaveId(saveId), resolver)
    {
    }
}
```

读档侧的两段处理（`TaleWorlds.SaveSystem.Load/VariableLoadData.cs:51-64` 与 `:108-122`，节选）：

```csharp
// 第一趟 Read()：解析改名，Data 仍是字符串
_saveId = SaveId.ReadSaveIdFrom(_reader);
_typeDefinition = Context.DefinitionContext.TryGetTypeDefinition(_saveId);
string text = _reader.ReadString();
EnumDefinition enumDefinition = (EnumDefinition)_typeDefinition;   // 硬转，非枚举定义会抛
if (enumDefinition?.Resolver != null) { Data = enumDefinition.Resolver.ResolveObject(text); }
else                                 { Data = text; }               // 定义缺失 → 退化成原始字符串

// 第二趟 GetDataToUse()：真正 Parse，条件不满足就留 null
if (_typeDefinition == null) { result = (string)Data; }
else
{
    EnumDefinition enumDefinition2 = (EnumDefinition)_typeDefinition;
    Type type = _typeDefinition.Type;
    if (Enum.IsDefined(type, Data) || enumDefinition.HasFlags)   // ← HasFlags 在这里起作用
    {
        result = Enum.Parse(type, (string)Data);
    }
    // 不成立时 result 保持 null
}
```

mod 视角的对照实验：

```csharp
// enum Level { Low = 1, High = 2 }   改名成 enum Level { Minor = 1, Major = 2 }
//   旧档读回 → Enum.IsDefined 失败 → 结果 null，零异常
// 给它加 [Flags]（哪怕语义上不组合）
//   → HasFlags = true → 陌生名字照样进 Enum.Parse
// 或挂一个 IEnumResolver 把旧名映射成新名字
//   → 第一趟就换成新名字，第二趟 IsDefined 通过
Debug.Print("枚举改名是静默 null；[Flags] 与 resolver 是两个不同的补救", 0);
```

## 依赖关系

- 基类：[TypeDefinitionBase](../TypeDefinitionBase)（提供 `Type` / `SaveId` / `TypeLevel`；本类不持有任何成员定义）
- 改名钩子：[IEnumResolver](../IEnumResolver)（`Resolver` 字段的类型，唯一调用点在 [VariableLoadData](../VariableLoadData)）
- 读档侧唯一消费者：[VariableLoadData](../VariableLoadData)（`:51-64` 第一趟、`:108-122` 第二趟，含硬转与 `HasFlags` 判据）
- 写盘侧对应：[VariableSaveData](../VariableSaveData)（`:110-114` 写身份 + 名字字符串，所以枚举是自描述的）
- 标签：[SavedMemberType](../SavedMemberType) 的 `Enum`（序号 5）
- 取定义的入口：[DefinitionContext](../DefinitionContext) 的 `GetEnumDefinition`（`:494`）与 `AddEnumDefinition`（`:186` 阶段的 `DefineEnumTypes`）
- 登记侧：[SaveableTypeDefiner](../SaveableTypeDefiner)、[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)
- 体系全貌：../../../architecture/save-system