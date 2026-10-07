---
title: "StringSerializer"
description: "名义上负责字符串的序列化器，但它的三个方法全是空的：序列化不写任何字节、反序列化返回 null、字节预算为 0 —— 字符串字段根本走不到它。"
---

# StringSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class StringSerializer : IBasicTypeSerializer`
**Base:** 无（实现 `IBasicTypeSerializer`）
**File:** `TaleWorlds.SaveSystem.Definition/StringSerializer.cs`

## 概述

它是 [BasicTypeDefinition](../BasicTypeDefinition) 的序列化器名单里唯一一个「什么都不做」的成员：`Serialize` 的方法体是空的（`StringSerializer.cs:7-9`），`Deserialize` 直接 `return null;`（`:13`），`GetSizeInBytes` 恒返回 0（`:18`）。**这不是 bug，而是一条被绕开的路径**——[VariableSaveData](../VariableSaveData) 在判定槽位路线时，`typeof(string) == memberType` 这一条排在基础类型分支**前面**（`:54` 对比 `:74`），所以 `string` 字段被标成 [SavedMemberType](../SavedMemberType) 的 `String`、值换成字符串表编号，**根本不会走到 `BasicTypeDefinition.Serializer`**。要读懂这一个类，关键是理解「它被注册了，但永远不会被调用」。

## 心智模型

把它想成**一把登记在册但从不取用的钥匙**：柜子里挂着它（`AddBasicTypeDefinition` 收了它），可真去开锁的流程在更早一步就换了另一把。推论有四条：

1. **判定顺序决定它是否被调用。** [VariableSaveData](../VariableSaveData) 的六条分支里，字符串分支在第 4 位、基础类型分支在第 6 位——**顺序是硬编码的 if/else 链**，所以只要声明类型正好是 `string`，就永远走不到 `TypeDefinition is BasicTypeDefinition`。
2. **如果它真被调用，存档会坏成两种样子。** 空实现不写字节、而它报的字节数也是 0，两边一致所以不会立刻崩；但读侧恒 `return null`——**所有 `string` 字段读回来都是 null，且没有任何异常**。这是「零报错 + 结果错」里最安静的一种。
3. **它的 `GetSizeInBytes` 是 `public`，而同类别的其他序列化器是显式接口实现。** 对比 [IntBasicTypeSerializer](../IntBasicTypeSerializer) 的 `int IBasicTypeSerializer.GetSizeInBytes()`（`:17`）——本类是 `public int GetSizeInBytes()`（`:16`）。**两处不一致，看起来像是写完没清理的痕迹**，但我不据此断言动机。
4. **它是「显式接口实现」这个模式的样板。** 三个方法里两个写成 `void IBasicTypeSerializer.Serialize(...)`、`object IBasicTypeSerializer.Deserialize(...)`——**所以外部代码拿 `IBasicTypeSerializer` 引用才能调到它们**；这也意味着这些方法在类名上不可见。

## 如何使用

### 怎么拿到它

**别用。** 它的实例由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) / 你的 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition(type, saveId, serializer)` 造出 `BasicTypeDefinition` 时传入，而 [DefinitionContext](../DefinitionContext) 会把它存在 `BasicTypeDefinition.Serializer`（`BasicTypeDefinition.cs:12`）。**但要影响 `string` 字段的存档行为，正确的做法是不要声明成 `string` 的基础类型路线**——它天生就走字符串表。**mod 实际能观察到的只有一件事：如果你在自定义 definer 里把 `string` 注册成基础类型并传本类，那么这个类型定义存在、但字段落盘仍走字符串表，两边不一致。**

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 它的三个方法的真实行为（源码逐字）
// void IBasicTypeSerializer.Serialize(IWriter writer, object value) { }      ← 空的
// object IBasicTypeSerializer.Deserialize(IReader reader) { return null; }   ← 恒 null
// public int GetSizeInBytes() { return 0; }                                 ← 恒 0

// 为什么用不到：VariableSaveData 的判定顺序
//   :54  typeof(string) == memberType          → SavedMemberType.String  ← string 在这里就走了
//   :74  TypeDefinition is BasicTypeDefinition → SavedMemberType.BasicType  ← 永远到不了
Debug.Print("string 字段走字符串表，不走本类", 0);

// 想验证某个类型到底走哪条路线，看槽位第一字节：
//   Object=0 Container=1 String=2 Tuple=3 CustomStruct=4 Enum=5 BasicType=6
Debug.Print("String = 2，BasicType = 6", 0);
```

### 用它最容易踩的一条

**把 `string` 字段当成基础类型来推理字节布局，会得出「字符串占 0 字节」的错误结论。** 因为本类的 `GetSizeInBytes` 确实返回 0（`StringSerializer.cs:18`），但 `string` 字段根本不调用它。真实情况是：字符串分支在基础类型分支之前就把槽位标成了 `SavedMemberType.String`（`VariableSaveData.cs:54`）。字节数由 `GetDataSize` 里那个「加 4」决定（`VariableSaveData.cs:133`）。而**真实文本长度进的是 `Strings` 段**，由 [SaveContext](../SaveContext) 的 `AddOrGetStringId` 建表。所以：**槽位恒定 8 字节，文本长度不影响槽位**。想估算存档体积，要看 `GameData.Strings.Length`，不能看字段的类型。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Serialize` | `void IBasicTypeSerializer.Serialize(IWriter writer, object value)` | `:7-9`。**方法体是空的**——一个字节都不写。这是显式接口实现，外部必须经 `IBasicTypeSerializer` 引用调用。**因为 `string` 字段走不到这里，所以这个空实现从未暴露问题。** |
| `Deserialize` | `object IBasicTypeSerializer.Deserialize(IReader reader)` | `:11-14`。**恒 `return null;`**（`:13`），参数 `reader` 一次都没读。**若被调用，所有 `string` 字段静默变 null 且零异常。** |
| `GetSizeInBytes` | `public int GetSizeInBytes()` | `:16-19`。**恒返回 0**（`:18`）。**注意它是 `public` 的具体方法，不是显式接口实现**——与同族其他序列化器（[IntBasicTypeSerializer](../IntBasicTypeSerializer) `:17`）写法不一致。 |
| 类型身份 | `internal class StringSerializer : IBasicTypeSerializer` | `internal`。三个成员就是接口的三个（`Serialize` / `Deserialize` / `GetSizeInBytes`），**除此之外没有任何字段或状态**——它是无状态的纯函数式实现，与 [IntBasicTypeSerializer](../IntBasicTypeSerializer) 那种「一个读写配对」是同一形状。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/StringSerializer.cs:5-20`）：

```csharp
internal class StringSerializer : IBasicTypeSerializer
{
    void IBasicTypeSerializer.Serialize(IWriter writer, object value)
    {
        // 空实现：一个字节都不写
    }

    object IBasicTypeSerializer.Deserialize(IReader reader)
    {
        return null;      // 恒 null
    }

    public int GetSizeInBytes()
    {
        return 0;         // 恒 0
    }
}
```

它为什么不会被调用（`TaleWorlds.SaveSystem.Save/VariableSaveData.cs:54` 与 `:74`，顺序即结论）：

```csharp
else if (typeof(string) == memberType)          // :54  ← string 字段在这里就被截走了
{
    MemberType = SavedMemberType.String;
    Value = data;                                // 值是字符串本体，写盘时才换成字符串表编号
}
...
else if (TypeDefinition is BasicTypeDefinition) // :74  ← 永远到不了这一行
{
    MemberType = SavedMemberType.BasicType;
    Value = data;
}
```

mod 视角的对照实验：

```csharp
// ① string 字段：槽位恒定 8 字节（4 固定 + 4 字符串表编号），文本长度不影响它
//    VariableSaveData.cs:133-135 里 String 与 Object/Container/CustomStruct 同属「加 4」那一档
// ② 真正的文本字节在 Strings 段，由 SaveContext.AddOrGetStringId 建表
// ③ 所以要估体积：看 GameData.Strings.Length，不是看字段声明类型
Debug.Print("本类的 0 字节是真的，但它不属于 string 字段的账", 0);
```

## 依赖关系

- 契约：[IBasicTypeSerializer](../IBasicTypeSerializer)（`Serialize` / `Deserialize` / `GetSizeInBytes` 三个成员）
- 持有者：[BasicTypeDefinition](../BasicTypeDefinition)（构造器在 `:12` 把它存进 `Serializer`）
- 注册入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition`（内部 `new BasicTypeDefinition(type, _saveBaseId + saveId, serializer)`）、[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)
- 真正处理 `string` 字段的地方：[VariableSaveData](../VariableSaveData)（`:54` 的字符串分支、`:105-108` 的字符串表编号替换）与 [SaveContext](../SaveContext) 的 `AddOrGetStringId`
- 标签：[SavedMemberType](../SavedMemberType) 的 `String`（序号 2）与 `BasicType`（序号 6）
- 读侧对照：[VariableLoadData](../VariableLoadData)（`String` 分支在 `:47`、`:103`）
- 字节原语：`TaleWorlds.Library` 的 `IWriter` / `IReader`（本类一个都没用）
- 同族代表：[IntBasicTypeSerializer](../IntBasicTypeSerializer)、[BoolBasicTypeSerializer](../BoolBasicTypeSerializer)、[FloatBasicTypeSerializer](../FloatBasicTypeSerializer)、[Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer)、[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer)、[ColorBasicTypeSerializer](../ColorBasicTypeSerializer)
- 体系全貌：../../../architecture/save-system