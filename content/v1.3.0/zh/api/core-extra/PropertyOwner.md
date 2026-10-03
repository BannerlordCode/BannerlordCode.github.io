---
title: "PropertyOwner"
description: "键值属性袋：Dictionary<属性对象, 整数> 的薄封装，键是 MBObjectBase 引用而非字符串，值写 0 等于删除该键——英雄天赋、技能焦点、角色特质都建在它上面。"
---

# PropertyOwner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class PropertyOwner<T> : IReadOnlyPropertyOwner<T> where T : MBObjectBase`
**Base:** [IReadOnlyPropertyOwner](../IReadOnlyPropertyOwner)（`public interface IReadOnlyPropertyOwner<T> where T : MBObjectBase`）
**File:** `TaleWorlds.Core/PropertyOwner.cs`（全文 104 行，3008 字节）

## 概述

`PropertyOwner<T>` 是一个**极薄的属性袋**：内部就一个 `private readonly Dictionary<T, int> _attributes`，全部 104 行里没有一个算法。八个 public 成员里五个是字典的直接包装（`SetPropertyValue` / `GetPropertyValue` / `HasProperty` / `ClearAllProperty` / `GetProperties`），另外三个是两个构造器和一个 `Deserialize`。

它的价值不在自身，而在**两个设计选择**。第一个：**键是 `T` 这个 `MBObjectBase` 引用，不是字符串**。也就是说「力量 +5」里的「力量」是 [TraitObject](../../campaign/TraitObject) 的一个实例，查的时候传的是对象而不是 `"vigor"`。这让属性天然带上了类型和本地化信息，不需要额外的键名字典。

第二个：**`SetPropertyValue(attr, 0)` 等于删除这个键**，不是写入 0：

```csharp
public void SetPropertyValue(T attribute, int value)
{
    if (value != 0)
    {
        this._attributes[attribute] = value;
        return;
    }
    if (this.HasProperty(attribute))
    {
        this._attributes.Remove(attribute);
    }
}
```

于是「值是 0」和「没有这个属性」在字典里是**同一种状态**。读的时候 `GetPropertyValue` 查不到返回 0，写 0 之后 `HasProperty` 返回 `false`——这两条路径给出的答案一致。这不是 bug，是一个刻意的稀疏化设计：一条 `+0` 的属性不值得占字典空间，而 `GetProperties()` 返回的键列表也更短。

泛型参数 `T : MBObjectBase` 是硬约束——键必须是引擎注册过的对象，所以 `Dictionary<T, int>` 的默认比较器（引用相等）才成立：同一个 `StringId` 查两次拿到的是同一个实例。

## 心智模型

**把它想成「一个 int 值的小稀疏映射，键是引擎里的属性物品」。** 它不是一个「属性系统」，它只是存数字。「力量 +5 会怎么影响攻击力」那套逻辑在 [CharacterDevelopmentModel](../../campaign/CharacterDevelopmentModel) 那一层，不在这里。

**第一步，理解它为什么需要存在，而不是直接用 Dictionary。** 因为引擎里到处需要「一组数字，但键是对象、值可加可减」的容器，而裸字典会漏出三件事：一是「写 0 要不要保留」的语义，二是「读一个不存在的键返回什么」，三是「序列化怎么走」。本类把这三件事定死了，同时通过 [IReadOnlyPropertyOwner](../IReadOnlyPropertyOwner) 暴露一个只有两个读方法的窄接口：

```csharp
public interface IReadOnlyPropertyOwner<T> where T : MBObjectBase
{
    int GetPropertyValue(T attribute);
    bool HasProperty(T attribute);
}
```

这个窄接口是**给算法函数用的**。[CharacterDevelopmentModel](../../campaign/CharacterDevelopmentModel) 的两个抽象方法就只收 `IReadOnlyPropertyOwner<CharacterAttribute>`——技能学习率计算只需要「读」和「有没有」，不需要「写」和「清空」。所以一个纯计算函数不该拿到可写的 `PropertyOwner<T>`，这是接口隔离在引擎里的实际应用。

**第二步，理解两个方向的构造器差别。** 拷贝构造 `public PropertyOwner(PropertyOwner<T> propertyOwner)` 做的是 `new Dictionary<T, int>(propertyOwner._attributes)`——**真正的深拷贝**（字典结构独立了，但键和值是同一个引用/数值）。这很重要，因为 [CharacterObject](../../campaign/CharacterObject) 在 `Character.cs:394` 复制英雄时就是这么用的：

```csharp
characterObject._characterTraits = new PropertyOwner<TraitObject>(character._characterTraits);
```

拷贝出来的 `_characterTraits` 与原英雄完全独立——之后给副本加天赋不会影响本体。

**第三步，理解 `GetProperties()` 的返回类型是个坑。** 它返回 `MBList<T>`，实现是 `this._attributes.Keys.ToMBList<T>()`。`ToMBList` 是扩展方法，**每次调用都会新建一个列表**——这是个真正的快照，不会因为后续写入而变化。但注意它用的是 `Dictionary.KeyCollection`，**遍历顺序是插入顺序**（除非有过删除再插入，那会挪到末尾）。所以「按 `GetProperties()` 的顺序遍历」在语义上是稳定的，但不要依赖它做确定性排序。

**第四步，理解 `Deserialize` 只认 `id` 和 `value` 两个属性。** 它遍历 XML 子节点，跳过注释，取 `attributes["id"].Value` 当键、`attributes["value"].Value` 当值，然后 `Game.Current.ObjectManager.GetObject<T>(value)` 查对象。这里有两个真实风险：

1. **不判空。** `attributes["id"]` 和 `attributes["value"]` 都是直接 `.Value`，XML 里少任何一个属性就 `NullReferenceException`。
2. **查不到就静默跳过。** `if (@object != null)` 才调 `SetPropertyValue`。所以一份引用了不存在物品 id 的 XML 会**安静地丢掉那条属性**，不报错不警告——排查时很难发现。

注意它**不走** `MBObjectManager` 的常规反序列化流程，而是直接依赖 `Game.Current` 这个静态单例。所以没启动游戏时调 `Deserialize` 必然 `NullReferenceException`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public PropertyOwner()` | 建一个空 `Dictionary<T, int>`。这是唯一被 `Deserialize` 配合使用的构造。 |
| 拷贝构造 | `public PropertyOwner(PropertyOwner<T> propertyOwner)` | `new Dictionary<T, int>(propertyOwner._attributes)`——**深拷贝**。传 `null` 会抛 `ArgumentNullException`（`Dictionary` 拷贝构造的行为）。 |
| `SetPropertyValue` | `public void SetPropertyValue(T attribute, int value)` | **`value != 0` 才写入；`value == 0` 则移除该键**。传 `attribute == null` 会抛 `ArgumentNullException`（字典索引器行为）。 |
| `GetPropertyValue` | `public int GetPropertyValue(T attribute)` | 查不到返回 `0`。`attribute == null` 时先 `Debug.FailedAssert(...)` 再 `return 0`——**不抛异常，返回 0**。 |
| `HasProperty` | `public bool HasProperty(T attribute)` | `ContainsKey`。**传 `null` 会抛 `ArgumentNullException`**，因为 `Dictionary.ContainsKey(null)` 直接报。 |
| `ClearAllProperty` | `public void ClearAllProperty()` | `this._attributes.Clear()`。清空全部，不保留键壳。 |
| `GetProperties` | `public MBList<T> GetProperties()` | `this._attributes.Keys.ToMBList<T>()`——**新建的快照列表**，改动它不影响内部字典。反过来说，它返回的 `MBList<T>` 是可变的，你可以随便改，改的只是那份拷贝。 |
| `Deserialize` | `public void Deserialize(MBObjectManager objectManager, XmlNode node)` | 遍历子节点，`id` → `GetObject<T>(id)`，`value` → `Convert.ToInt32`，然后 `SetPropertyValue`。**两个属性缺失会 NRE，查不到对象静默跳过。** 注意它用 `Game.Current` 而非传进来的 `objectManager` 参数。 |
| `_attributes` | `[SaveableField(10)] protected readonly Dictionary<T, int> _attributes` | 唯一的存储。`protected` 意味着派生类能直接读写字典——**绕过 `SetPropertyValue` 的「0 即删除」语义**。存档字段号 10。 |

| 窄接口 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `IReadOnlyPropertyOwner<T>` | `public interface IReadOnlyPropertyOwner<T> where T : MBObjectBase` | 只暴露 `GetPropertyValue` 与 `HasProperty`。算法函数（如技能成长计算）拿这个类型，从源头上没法改别人的属性。 |
| `AutoGeneratedInstanceCollectObjects` | `protected virtual void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档对象图钩子，唯一实现是 `collectedObjects.Add(this._attributes);`——把整个字典当一个对象收走。继承它无意义。 |

## 真实示例

最典型的用法是英雄的技能焦点。[HeroDeveloper](../../campaign/HeroDeveloper) 用一个 `PropertyOwner<SkillObject>` 记录「玩家分配但尚未生效的技能点」，两个私有方法把读写都包了一层：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

// HeroDeveloper._newFocuses 是 private，外部拿不到实例本身；
// 但 Hero 把读写都包成了 public 方法：Hero.HeroDeveloper（Hero.cs:1761）。
public static void DumpPendingFocus()
{
    HeroDeveloper developer = Hero.MainHero.HeroDeveloper;
    MBDebug.Print("unspent focus points = " + developer.UnspentFocusPoints);
}
```

`HeroDeveloper.cs:449` 与 `:455` 就是这个模式的两端：

```csharp
private void SetFocus(SkillObject focus, int newAmount)
{
    this._newFocuses.SetPropertyValue(focus, newAmount);
}

public int GetFocus(SkillObject skill)
{
    return this._newFocuses.GetPropertyValue(skill);
}
```

注意 `SetFocus(skill, 0)` 的效果——不是「存一个 0」，而是**把技能从这个袋子里彻底移除**。所以「玩家把技能点退回来」和「玩家从没在这个技能上放点」在内部状态上完全一致，`GetFocus` 对两者都返回 0。

写一个自己的属性袋，并显式利用「0 即删除」：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;

// T 必须是 MBObjectBase 子类；这里用技能对象当键。
public class MyTraitBag
{
    private readonly PropertyOwner<SkillObject> _inner = new PropertyOwner<SkillObject>();

    public void ApplyBonus(SkillObject skill, int amount)
    {
        if (amount <= 0)
        {
            // 传 0 会移除键；传负数则会被当成真实值写入。
            amount = 0;
        }
        this._inner.SetPropertyValue(skill, amount);
    }

    public int GetBonus(SkillObject skill)
    {
        return this._inner.GetPropertyValue(skill);
    }

    public bool HasBonus(SkillObject skill)
    {
        return this._inner.HasProperty(skill);
    }

    public List<SkillObject> ListSkills()
    {
        // GetProperties() 每次新建列表，可以放心遍历。
        List<SkillObject> keys = new List<SkillObject>(this._inner.GetProperties());
        return keys;
    }

    public void Reset()
    {
        // ClearAllProperty 是唯一会清空整个字典的方法。
        this._inner.ClearAllProperty();
    }

    public MyTraitBag Clone()
    {
        MyTraitBag copy = new MyTraitBag();
        foreach (SkillObject skill in this._inner.GetProperties())
        {
            copy.ApplyBonus(skill, this._inner.GetPropertyValue(skill));
        }
        return copy;
    }
}
```

`HasBonus(skill)` 永远等价于 `GetBonus(skill) != 0`——因为写 0 就删键、删键后 `GetPropertyValue` 返回 0。所以**那两个方法永远成对出现**，一起用才有信息量；只用其中一个等于白问。

`ClearAllProperty` 是唯一会把整个袋子清空的方法：

```csharp
using TaleWorlds.CampaignSystem;

// Campaign.PlayerTraitDeveloper 就是 PropertyOwner<PropertyObject>，
// 玩家用控制台给自己加特质时会先清空再逐条设置。
public static void ResetDeveloperTraits()
{
    PropertyOwner<PropertyObject> developer = Campaign.Current.PlayerTraitDeveloper;
    developer.ClearAllProperty();
    MBDebug.Print("traits now = " + developer.GetProperties().Count);
}
```

`Campaign.cs:2440` 声明 `public PropertyOwner<PropertyObject> PlayerTraitDeveloper { get; private set; }`——注意它的 setter 是 `private`，**你不能整体替换它**，只能调它的方法。

## 风险与边界

- **写 0 是删除，不是写零。** 这是本页最重要的一条。任何「把属性值设为 0」的代码路径，副作用是把这个键从字典里摘掉。后果包括：`GetProperties()` 少一项、序列化输出少一行、以及——如果你有基于键存在性做判断的逻辑——行为翻转。
- **负数不会触发删除。** 分支条件是 `value != 0`，所以 `-5` 被当作真实值写入。要「删除」必须正好传 `0`。
- **`HasProperty(null)` 抛异常，`GetPropertyValue(null)` 不抛。** 这是个不对称的设计：`GetPropertyValue` 内部显式判 `null` 并 `Debug.FailedAssert` 后 `return 0`，而 `HasProperty` 直接把 `null` 交给 `Dictionary.ContainsKey`，立刻 `ArgumentNullException`。**别用 `HasProperty` 做防御性判空。**
- **`SetPropertyValue(null, x)` 抛异常。** 字典索引器不接受 `null` 键。
- **`GetProperties()` 返回可变列表但改不到内部。** 每次调用都 `ToMBList<T>()` 新建一份，所以 `GetProperties().Add(x)` 看起来在改东西，实际上完全无效——`HasProperty(x)` 仍然是 `false`。这个静默失败很容易让人以为属性加上去了。
- **`GetProperties()` 的顺序是字典插入顺序，不是稳定排序。** 删除后再插入同一个键，它会排到末尾。遍历顺序在有删除操作时不可靠。
- **`Deserialize` 依赖 `Game.Current`。** 签名上收 `MBObjectManager objectManager`，实现里却用 `Game.Current.ObjectManager.GetObject<T>(...)`。游戏未启动时必然 `NullReferenceException`，**传进来的那个 `objectManager` 参数被完全忽略**。
- **`Deserialize` 不校验 XML 属性存在性。** 节点缺 `id` 或 `value` 属性就是 `NullReferenceException`，没有友好报错。
- **`Deserialize` 静默丢弃未知 id。** `GetObject<T>` 返回 `null` 时直接跳过那条属性。不报错、不警告——数据文件里打错一个物品 id，你会看到属性少了一条却找不到原因。
- **`_attributes` 是 `protected`。** 派生类可以直接 `this._attributes[attr] = 0`，**绕过「0 即删除」语义**，导致 `GetPropertyValue` 返回 0 但 `HasProperty` 是 `true`。这两个方法从「永远等价」变成「可能不等价」。继承本类时要小心。
- **存档字段号 10。** `[SaveableField(10)]` 标在 `protected readonly Dictionary<T, int>` 上，存档系统按字段号恢复。1.3.0 到 1.5.3 之间这个号没变，**但如果你继承了本类并新增字段，不要占用 10**。
- **不是 `MBObjectBase`。** 本类自身不会被对象管理器注册，是被 `CharacterObject` / `HeroDeveloper` / `Campaign` 直接 `new` 出来的普通对象。`new PropertyOwner<SkillObject>()` 在任何时候都合法。
- **键的比较是引用相等。** 同一 `StringId` 的 `SkillObject` 从对象管理器取两次拿到的是同一个实例，所以能命中；但如果你自己 `new` 了一个同名的属性对象，它和注册表里那个**是两个键**，会存成两条。这个类**没有**按 `StringId` 做值语义的兜底。

## 跨版本提示

`PropertyOwner.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵源码树里**public 成员集合完全一致**——两个构造器加六个方法（`SetPropertyValue` / `GetPropertyValue` / `HasProperty` / `ClearAllProperty` / `GetProperties` / `Deserialize`），八个，没有增删。

字节数有微小差异：1.3.0 与 1.3.15 是 3008 / 3015 字节，1.4.6、1.4.7、1.5.3 是 2993 字节；三者行数同为 104 行。**差异同样来自反编译器的排版**（`: base(...)` 与个别语句的换行），不改变任何签名或语义。

基类接口 [IReadOnlyPropertyOwner](../IReadOnlyPropertyOwner) 也没变，始终只有 `GetPropertyValue` 与 `HasProperty` 两个成员。

结论：**这个类在 1.3 → 1.5 三个大版本间完全稳定**，且它承载的存档字段号 `10` 也未变动——旧存档里的属性数据在新版本上能正常读出。你的属性代码不需要版本适配。

## 依赖关系

- 窄接口：[IReadOnlyPropertyOwner](../IReadOnlyPropertyOwner) 是本类实现的接口，只暴露两个读方法；算法函数应该依赖它而不是本类
- 键类型家族：[SkillObject](../SkillObject) 与 [TraitObject](../../campaign/TraitObject) 都是 `MBObjectBase` 子类，是 `PropertyOwner<T>` 最常见的两个 `T`
- 存储契约：[MBList](../MBList) 是 `GetProperties()` 的返回类型，继承自 [MBReadOnlyList](../MBReadOnlyList)
- 实际持有者：[CharacterObject](../../campaign/CharacterObject) 持有 `PropertyOwner<TraitObject> _characterTraits` 并在复制英雄时用拷贝构造；`HeroDeveloper` 持有 `PropertyOwner<SkillObject> _newFocuses`
- 算法消费方：[CharacterDevelopmentModel](../../campaign/CharacterDevelopmentModel) 的技能成长计算只收 `IReadOnlyPropertyOwner<CharacterAttribute>`，是「只读接口」设计的最清楚一例
- 桶首页：[core-extra API 分区](../)