---
title: "MBGUID"
description: "把类型编号与类型内序号压进一个 uint 的跨存档标识：26 位子号 + 6 位类型号，值语义，可比较、可哈希、带存档特性。"
---
# MBGUID

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**Source:** `TaleWorlds.ObjectSystem/MBGUID.cs`

## 概述

`MBGUID` 是对象系统在存档里认出「这是同一个对象」的唯一凭据。它是一个 **32 位无符号整数**的结构体，被刻意切成两段：低 26 位是类型内的递增序号（`SubId`），高 6 位是类型编号（`GetTypeIndex()` 返回的那部分）。两个构造函数分别对应这两种造法：`MBGUID(uint id)` 直接把整个值原样塞进去，`MBGUID(uint objType, uint subId)` 做左移拼装并校验 `subId` 不超过 67108863。

它之所以值得单独一页，是因为它同时被三个体系依赖：对象系统用它当 `Dictionary` 键做按标识查找；存档系统用 `SaveableObjectSystemTypeDefiner` 把它注册成基础类型（saveId 1005，序列化器只写一个 `uint`）；`MBObjectBase` 把 `Id` 属性声明成这个类型，于是**跨对象引用在存档里存的是一个 4 字节整数而不是对象内容**。读档时 `MBObjectManager` 拿这个整数反查回真正的对象实例。

它实现 `IComparable`（非泛型）与 `IEquatable<MBGUID>`，并重写了 `Equals` / `GetHashCode` / `ToString`。值语义的完整程度足够让它安全地当字典键用。

## 心智模型

一条对象身份链是这样走的：`MBObjectManager` 为每个注册类型分配一个 `TypeNo`，该类型记录持有一个自增计数器 `_objCount`；每次要登记对象就调 `GetNewId()`，它把 `(typeNo, _objCount + 1)` 交给双参构造函数拼成整数，存进 `MBObjectBase.Id`，同时进那张按 GUID 建的字典。存档时 `MBGUIDBasicTypeSerializer` 只把这个整数写进流里；读档时 `MBObjectManager.GetObject(MBGUID)` 先用 `GetTypeIndex()` 找到 `TypeNo` 匹配的类型记录，再在那条记录的 GUID 字典里查实例。

**同一个 `SubId` 在不同类型下是不同的对象。** 因为判等比的是整个 `_internalValue`，而高位类型号是它的一部分。所以「英雄 1 号」和「部队模板 1 号」是两个不同的 `MBGUID`，不会撞。

另一个必须记住的点是默认值：`default(MBGUID)` 的 `InternalValue` 为 0，`SubId` 为 0，`GetHashCode()` 返回 0，而 `GetTypeIndex()` 返回 0。源码里**没有**任何「无效 ID」常量或哨兵值，也没有工厂方法去生成一个「必定无效」的标识——所以未注册对象的 `Id` 就是这个全零值。所有判空逻辑都得靠 `InternalValue == 0` 或对象的 `IsRegistered`，不能指望类型自己告诉你「我无效」。`ItemObject` 与 `PropertyObject` 的哈希撞码坑就是这么来的：`MBObjectBase.GetHashCode()` 直接返回 `Id.GetHashCode()`。

拼装是有代价的：双参构造函数里 `subId > 67108863` 会抛 `MBOutOfRangeException`，也就是单个类型下最多约 6710 万个对象。

## 关键成员

### 构造与取值

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MBGUID(uint id)` | `public MBGUID(uint id)` | 把整个 32 位值原样当作标识。存档系统反序列化时走的就是这条（`new MBGUID(reader.ReadUInt())`），以及 `GetNewId` 拼装完的递归构造 |
| `MBGUID(uint objType, uint subId)` | `public MBGUID(uint objType, uint subId)` | 按 `(objType << 26) | subId` 拼装。`subId` 超出 67108863 时抛 `MBOutOfRangeException`。`objType` 不做范围校验，因此超过 63 的类型号会左移溢出、污染高位 |
| `InternalValue` | `public uint InternalValue { get; }` | 底层那个 32 位整数的只读出口。要做序列化、手工构 ID 或调试打印时用它 |
| `SubId` | `public uint SubId { get; }` | 低 26 位掩码后的结果（`_internalValue & 67108863U`）。**只在同一类型内唯一**，跨类型会重复 |
| `GetTypeIndex` | `public uint GetTypeIndex()` | 高位类型号（`_internalValue >> 26`）。[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject(MBGUID)` 靠它先定位类型记录 |

### 比较

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `==` / `!=` | `public static bool operator ==(MBGUID id1, MBGUID id2)` / `!=` | 比整个 `_internalValue` |
| `<` / `>` | `public static bool operator <(MBGUID, MBGUID)` / `>` | 比整个 `_internalValue`，不是先按类型号 |
| `<=` / `>=` | `public static bool operator <=(MBGUID, MBGUID)` / `>=` | 同上 |
| `CompareTo` | `public int CompareTo(object a)` | 实现非泛型 `IComparable`。参数不是 `MBGUID` 时抛 **`MBTypeMismatchException`**（与 `CompareTo` 返回 1 的写法不同，这里是真的抛）。相等返回 0，大于返回 1，否则 -1 |
| `GetHash2` | `public static long GetHash2(MBGUID id1, MBGUID id2)` | 无序对哈希：先把两个参数按大小排一下再算 `num * 1046527L + num2`。给「一对对象」当字典键时用，与顺序无关 |

### 相等与哈希

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Equals(MBGUID other)` | `public bool Equals(MBGUID other)` | 强类型重载，比整个 `_internalValue`。字典查找走这条 |
| `Equals(object obj)` | `public override bool Equals(object obj)` | 装箱路径。参数不是 `MBGUID` 时返回 **false**，不抛异常 |
| `GetHashCode` | `public override int GetHashCode()` | `(int)_internalValue`，直接截断成有符号 32 位。值大于 `int.MaxValue` 时得到负数，但仍然稳定且一致 |
| `ToString` | `public override string ToString()` | 就是 `InternalValue.ToString()`，即十进制无符号整数。日志里看到的是这个裸数字，不带任何类型或十六进制前缀 |

### 存档接线

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `_internalValue` | `private readonly uint _internalValue`，带 `[CachedData]` 与 `[SaveableField(1)]` | 唯一的状态字段。`readonly` 加 `[SaveableField(1)]` 意味着它就是本类型在存档里出现的全部内容——4 个字节，`SaveableObjectSystemTypeDefiner` 注册的 saveId 是 1005，序列化器 `MBGUIDBasicTypeSerializer` 只做一次 `WriteUInt` / `ReadUInt` |

## 怎么用

### 怎么拿到它

`MBGUID` 是 `TaleWorlds.ObjectSystem` 里的 `readonly struct`（`MBObjectSystem/MBGUID.cs:8`），内部只有一个 `[CachedData] [SaveableField(1)] private readonly uint _internalValue`（`MBGUID.cs:158-160`）。它**不会自己出现在业务代码的视野里**，只有三条入口：

- 从对象上读：`MBObjectBase.Id`（`MBObjectBase.cs:23`）——这是绝大多数情况，拿到对象就等于拿到它的 id。
- 按 id 反查对象：`MBObjectManager.GetObject(MBGUID objectId)`（`MBObjectManager.cs:419`），拿的是 `MBObjectBase`，需要自己再 cast 成具体类型。
- 自己造：`new MBGUID(uint id)`（`MBGUID.cs:11`，直接塞进 `_internalValue`）或 `new MBGUID(uint objType, uint subId)`（`MBGUID.cs:17`，按 `(objType << 26) | subId` 拼）。只有在写存档兼容层或自己实现一个 `IObjectManagerHandler` 时才会走第二条路；正常 mod 不要自己编码。

### 典型用法

把 id 当字典键缓存自定义数据，并在读档后按 id 回填：

```csharp
using TaleWorlds.ObjectSystem;

private readonly Dictionary<MBGUID, int> _killCounts = new Dictionary<MBGUID, int>();

public void RecordKill(Hero dead)
{
    MBGUID key = dead.Id;                  // MBObjectBase.Id，MBObjectBase.cs:23
    int next;
    _killCounts.TryGetValue(key, out next);
    _killCounts[key] = next + 1;
}

public MBReadOnlyList<Hero> FindCheaters()
{
    // MBObjectManager.cs:419 返回 MBObjectBase，这里统一 cast 回 Hero
    var hits = new List<Hero>();
    foreach (KeyValuePair<MBGUID, int> pair in _killCounts)
    {
        var hero = MBObjectManager.Instance.GetObject(pair.Key) as Hero;
        if (hero != null && pair.Value > 50)
        {
            hits.Add(hero);
        }
    }
    return hits;
}
```

需要打印或排序时，用它自己带的比较运算（`MBGUID.cs:47-81`）和 `CompareTo(object)`（`MBGUID.cs:97`）：

```csharp
// == 比较的是 _internalValue（MBGUID.cs:47），GetTypeIndex() 是高位 >>26（MBGUID.cs:115）
if (candidate.Id == hero.Id)
{
    Debug.Print("type index = " + candidate.Id.GetTypeIndex(), 0);
}

// GetHash2 会先自行交换顺序（MBGUID.cs:83-92），两个 id 可以随便传
long pairHash = MBGUID.GetHash2(hero.Id, victim.Id);
```

### 最容易踩的坑

**用双参数构造器自己编码 id，却以为 `objType` 也会被校验。** `new MBGUID(uint objType, uint subId)` 只对 `subId` 做范围检查——`subId < 0U || subId > 67108863U` 时抛 `MBOutOfRangeException`（`MBGUID.cs:19-22`）；`objType` 是直接 `objType << 26`（`MBGUID.cs:24`），完全没有校验。类型位只有 6 位（`private const int ObjectIdNumBits = 26;` / `ObjectIdBitFlag = 67108863`，`MBGUID.cs:154-157`），所以一旦 `objType >= 64`，高位会被挤掉，`GetTypeIndex()`（`MBGUID.cs:115`，即 `_internalValue >> 26`）读回来的类型索引不是你写的那个数，和别的已注册类型的 id 直接重号；后续 `MBObjectManager.GetObject(MBGUID)` 按 `InternalValue` 查会拿到**另一个类型或 null**，而且因为整个过程不抛异常，错误会一路漂到读档时才暴露。

顺带两个同源陷阱：`default(MBGUID)` 的 `InternalValue` 是 `0`，`ToString()` 也返回 `"0"`（`MBGUID.cs:127-130`），拿它当「无 id」判断可以，但它和任何真实 id 都 `!=`，不要指望它等于某个默认对象；而 `CompareTo(object a)` 在参数不是 `MBGUID` 时**抛 `MBTypeMismatchException`**（`MBGUID.cs:98-100`），注意这个类型只实现了非泛型 `IComparable`（`MBGUID.cs:8`），排序时不要顺手传错类型。

## 真实示例

手工构一个标识并拆开看：

```csharp
// MBGUID / MBObjectManager 都是游戏 API；
// 下面这段演示的是自己按类型号与序号拼一个标识出来
public class IdentityProbe
{
    private readonly MBGUID _heroSlot5;

    public IdentityProbe()
    {
        // 双参构造函数：低位放序号，高位放类型号
        _heroSlot5 = new MBGUID(3u, 5u);
    }

    public uint RawValue
    {
        get { return _heroSlot5.InternalValue; }
    }

    public uint TypeNumber
    {
        get { return _heroSlot5.GetTypeIndex(); }
    }

    public uint SlotNumber
    {
        get { return _heroSlot5.SubId; }
    }

    public string Describe()
    {
        // ToString 就是十进制裸数字
        return "type=" + TypeNumber + " slot=" + SlotNumber + " raw=" + _heroSlot5.ToString();
    }
}
```

反查回真正的对象——这是这个类型最主要的用途：

```csharp
// 读者侧演示：把存下来的标识还原成对象
public class ReferenceRestorer
{
    public MBObjectBase Restore(MBObjectBase anyObject, MBGUID savedId)
    {
        // 先用高位类型号定位类型记录，再在该记录内按 GUID 查实例
        MBObjectBase restored = MBObjectManager.Instance.GetObject(savedId);

        if (restored == null)
        {
            Debug.Print("no object for type index " + savedId.GetTypeIndex(), 0);
            return null;
        }

        // 跨类型时记得确认类型，GetObject 返回的是基类
        if (!(restored is MBObjectBase))
        {
            return null;
        }

        return restored;
    }
}
```

当字典键用，以及撞码的判别：

```csharp
// 读者侧演示：MBGUID 作键与零值的陷阱
public class GuidKeyedCache
{
    private readonly Dictionary<MBGUID, string> _cache = new Dictionary<MBGUID, string>();

    public void Put(MBGUID id, string label)
    {
        // 未注册对象的 Id 是 default(MBGUID)，会覆盖同一格
        _cache[id] = label;
    }

    public string Take(MBGUID id)
    {
        string label;
        return _cache.TryGetValue(id, out label) ? label : null;
    }

    public bool IsUnassigned(MBGUID id)
    {
        // 源码没有无效 ID 常量，只能自己比零值
        return id.InternalValue == 0u;
    }

    public static long PairKey(MBGUID left, MBGUID right)
    {
        // 无序对哈希，交换左右得到同一个值
        return MBGUID.GetHash2(left, right);
    }
}
```

## 风险与边界

- **`default(MBGUID)` 就是全零，没有任何哨兵值。** 源码里不存在「无效 ID」常量或工厂方法。未注册对象的 `Id` 是零值、`GetHashCode()` 也是零。
- **零值当字典键会互相覆盖。** `MBObjectBase.GetHashCode()` 返回 `Id.GetHashCode()`，所以多个未注册实例的哈希全为 0。`ItemObject` 与 `PropertyObject` 的相关坑都源于此。
- **`SubId` 只在类型内唯一。** 两个不同类型的对象可以拥有相同的 `SubId`。要判「是不是同一个对象」必须比整个 `MBGUID`，不能只比 `SubId`。
- **比较运算先比整个整数，不先比类型号。** `<` / `>` 的结果受类型号高位影响，跨类型排序看起来反直觉；`GetHash2` 里的排序也基于同一规则。
- **`CompareTo` 对类型不符会抛异常。** 参数不是 `MBGUID` 时抛 `MBTypeMismatchException`，不像别的 `IComparable` 实现那样返回一个哨兵值。拿它给 `object` 数组排序时会在运行期炸。
- **`Equals(object)` 与 `Equals(MBGUID)` 行为不同。** 前者对错误类型返回 false 不抛，后者走的是强类型路径。混用不会出错但要知道区别。
- **`GetHashCode()` 会截断成负数。** `InternalValue` 大于 `int.MaxValue` 时结果为负。这不影响字典正确性（日志里看着别扭而已）。
- **`GetTypeIndex()` 可能返回 0。** 全零标识的类型号是 0，而 0 也是一个合法的类型号。想用类型号区分「无效」，得同时看 `InternalValue`。
- **双参构造不校验 `objType`。** 只校验 `subId <= 67108863`。类型号超过 63 会左移溢出，把高位污染到类型号之外，造出一个与任何真实对象都不相等的标识。
- **`ToString()` 只有裸数字。** 不带类型前缀也不带十六进制，多个类型的同一个 `SubId` 打出来无法区分。日志里要靠前面的上下文补类型。
- **单类型上限约 6710 万。** 超过就抛 `MBOutOfRangeException`。这在正常游戏内容下不会到，但程序化批量生成的 mod 内容要留意。
- **`internalValue` 上的两个存档特性是唯一的状态出口。** 结构体没有别的字段，跨版本读档时也只读这 4 个字节——改这个类型的布局会直接毁掉旧档。

## 跨版本提示

本机 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBGUID.cs` 存在且可读（`bannerlord-1.4.5/Bannerlord.Source/bin/` 下 `.cs` 文件共 6222 个）。逐条比对 1.4.5 与 1.4.6 的成员声明，**公开面完全一致**：两个构造函数、`InternalValue` / `SubId` / `GetTypeIndex` / `GetHashCode` / `ToString` / 两个 `Equals` / `CompareTo` / `GetHash2` / 六个比较运算符全部同名同型，`_internalValue` 仍是带 `[CachedData]` 与 `[SaveableField(1)]` 的 `private readonly uint`，两个私有常量（位数与掩码）在两版里也是同样的 26 / 67108863。唯一差异是反编译产物的语法形态：1.4.5 把 `InternalValue` 与 `SubId` 写成表达式体、掩码写成十六进制字面量而非十进制，1.4.6 写成块体属性与十进制字面量 `67108863U`，数值相同。也就是这页描述的位布局在 1.4.5 上完全一致，读 1.4.5 的旧档没有任何问题。

## 依赖关系

- 宿主对象：[MBObjectBase](../../campaign-ext/MBObjectBase) — `Id` 属性声明为本类型，序列化位置 2，哈希直接由它决定。
- 分配与反查：[MBObjectManager](../../campaign-ext/MBObjectManager) — 分配标识、登记进 GUID 字典、按标识取回对象。
- 存档管线：[SaveManager](../../save-system/SaveManager) — 经 `SaveableObjectSystemTypeDefiner` 注册的 saveId 1005 进入对象图。
- 桶索引：[campaign-ext API 目录导览](../)
- 分层说明：[模块地图](../../../architecture/module-map)