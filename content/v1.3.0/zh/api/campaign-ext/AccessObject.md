---
title: "AccessObject"
description: "Diamond 认证握手的 polymorphic 基类：只有一个 Type 判别式字符串；6 个派生类对应 6 个发行平台，JsonConverter 用硬编码 if-else 把 Type 反解成具体类，未知值静默返回 null。"
---

# AccessObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class AccessObject`
**Base:** 无
**File:** `TaleWorlds.Diamond/AccessObject.cs`

## 概述

`AccessObject` 是 Diamond（游戏自己的服务发现/登录客户端）用来在网络上传递「我这边是哪个平台、拿什么凭证」的那半个对象。全文 16 行，一个属性 `Type`，没有方法、没有基类。

它身上挂了两个特性，各自决定了它的全部行为（`AccessObject.cs:7-9`）：

```csharp
[JsonConverter(typeof(AccessObjectJsonConverter))]
[Serializable]
public abstract class AccessObject
{
    public string Type { get; set; }
}
```

`[JsonConverter]` 让 Newtonsoft 在碰到任何 `AccessObject` 及其派生类时改走 [AccessObjectJsonConverter](../AccessObjectJsonConverter)；`[Serializable]` 是给 .NET 二进制序列化用的老式标记，跟 Newtonsoft 无关。

**`Type` 不是业务字段，是多态判别式（discriminator）。** 它的值不参与任何逻辑运算，只被转换器读一次用来决定 `new` 出哪个派生类。1.3.0 里它的取值空间被硬编码成六个字符串，与六个派生类一一对应（`AccessObjectJsonConverter.cs:17-46`）：`"Steam"` → `SteamAccessObject`、`"Epic"` → `EpicAccessObject`、`"GOG"` → `GOGAccessObject`、`"GDK"` → `GDKAccessObject`、`"PS"` → `PSAccessObject`、`"Test"` → `TestAccessObject`。

## 心智模型

整条链路是**「本地生成 → 装箱上线 → 对端按字符串反解」**，四个环节各自落在不同的文件里。

**第一环，谁生成。** 生成方是 `ILoginAccessProvider.CreateAccessObject()` 的实现，而实现类不在 1.3.0 这棵树里（它在 `TaleWorlds.Diamond.AccessProvider.Steam` 等独立工程，1.3.15 树里能看到 `SteamLoginAccessProvider.cs:66`：`return AccessObjectResult.CreateSuccess(new SteamAccessObject(this._steamUserName, text, this.AppId));`）。所以 1.3.0 的 Diamond 程序集只提供**契约和一半的 DTO**，不提供生产方。

**第二环，怎么装箱。** 生成方不直接发 `AccessObject`，而是先包一层 [AccessObjectResult](../AccessObjectResult)：

```csharp
// TaleWorlds.Diamond/AccessObjectResult.cs:25
public static AccessObjectResult CreateSuccess(AccessObject accessObject)
{
    return new AccessObjectResult { ... AccessObject = accessObject };
}
```

**第三环，`Type` 在哪一刻被写。** 每个派生类的**带参构造函数**里第一行就是写判别式。以 `SteamAccessObject` 为例（`TaleWorlds.Diamond/SteamAccessObject.cs`）：

```csharp
public SteamAccessObject(string userName, string externalAccessToken, int appId)
{
    base.Type = "Steam";
    this.UserName = userName;
    this.ExternalAccessToken = externalAccessToken;
    this.AppId = appId;
}

public SteamAccessObject() { }   // 反序列化用的无参 ctor，不写 Type
```

注意有**两个构造函数**：带参的负责写 `Type`，无参的什么都不做、专供 Newtonsoft 反序列化。`Type` 永远在构造期写一次，之后没有任何代码改它——`grep -rn "\.Type\s*=" --include=*.cs TaleWorlds.Diamond/` 只命中这六个派生类构造函数。

**第四环，怎么读。** 转换器的 `ReadJson` 完整形状是这样（`AccessObjectJsonConverter.cs:17-48`）：

```csharp
public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
{
    JObject jobject = JObject.Load(reader);
    string a = (string)jobject["Type"];
    AccessObject accessObject;
    if (a == "Steam")      { accessObject = new SteamAccessObject(); }
    else if (a == "Epic")  { accessObject = new EpicAccessObject(); }
    else if (a == "GOG")   { accessObject = new GOGAccessObject(); }
    else if (a == "GDK")   { accessObject = new GDKAccessObject(); }
    else if (a == "PS")    { accessObject = new PSAccessObject(); }
    else { if (!(a == "Test")) { return null; } accessObject = new TestAccessObject(); }

    serializer.Populate(jobject.CreateReader(), accessObject);   // 再把剩下的字段灌进无参实例
    return accessObject;
}
```

`Populate` 这一行是设计上的关键：`Type` 只用来选类型，选完之后同一个 JSON 对象被**第二次**灌进那个实例，于是 `Type`、`UserName`、`AppId` 这些属性才拿到值。所以 `Type` 在读侧被读了两次：一次选类型，一次随 `Populate` 回填。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Type` | `public string Type { get; set; }` | 判别式字符串，**只被 `AccessObjectJsonConverter.ReadJson` 读一次**用来选派生类。别处读不到它的语义，也没有任何逻辑比较它。它唯一有意义的取值就是那六个平台名之一；写成别的字符串，反序列化结果直接是 `null`（不是异常，是 `null`）。setter 是 public，但 1.3.0 托管树里除六个派生类构造函数外零调用。 |

六个派生类的成员不在本页范围内，但它们是这个基类唯一的实际内容载体：`SteamAccessObject` 有 `UserName` / `ExternalAccessToken` / `AppId` 三个 `[JsonProperty]`，`GDKAccessObject` / `EpicAccessObject` / `GOGAccessObject` / `PSAccessObject` / `TestAccessObject` 各带自己平台的凭证字段，全部是 `{ get; private set; }` + 一个无参 ctor + 一个写 `base.Type` 的带参 ctor 的标准三件套。

## 真实示例

自己实现一个平台（比如某个第三方启动器）需要两步：派生类负责写判别式，反序列化端才认得出来。

```csharp
using Newtonsoft.Json;
using TaleWorlds.Diamond;

[Serializable]
public class MyLauncherAccessObject : AccessObject
{
    [JsonProperty]
    public string SessionId { get; private set; }

    public MyLauncherAccessObject() { }

    public MyLauncherAccessObject(string sessionId)
    {
        base.Type = "MyLauncher";   // 判别式只在带参 ctor 里写
        this.SessionId = sessionId;
    }
}
```

线上的 JSON 形态（`Type` 必须**出现在 payload 里**，因为转换器在 `Populate` 之前就要读它）：

```json
{ "Type": "MyLauncher", "SessionId": "abc-123" }
```

但这条 JSON 在 1.3.0 上**解不出来**——`AccessObjectJsonConverter` 的 if-else 链是封闭的，`"MyLauncher"` 落进最后的 `else` 分支，命中 `if (!(a == "Test")) return null;` 直接返回 `null`。转换器是 `public class`，你可以整个替换掉它，但**不能只加一个派生类**：

```csharp
// 宿主在启动 Diamond 客户端之前自己换掉转换器（JsonConverter 特性是类型级的，
// Newtonsoft 对 [JsonConverter] 标记的类型不允许再注册同名转换器覆盖，
// 所以这条路走不通；正确做法是不给自定义类型挂那个特性）。
[JsonConverter(typeof(MyAccessObjectJsonConverter))]   // 只对自己的类型生效
public class MyLauncherAccessObject : AccessObject { /* ... */ }
```

**继承 `AccessObject` 的实际后果，是你也继承了那六个平台之一无法扩展的封闭链。** 想加平台，得改的是 `AccessObjectJsonConverter` 本身——这在 mod 里做不到（它是引擎程序集里的类型）。

## 风险与边界

- **未知 `Type` 返回 `null`，不是抛异常。** `ReadJson` 最后那个 `else` 分支的写法是 `if (!(a == "Test")) { return null; }`，命中就 `return null`。**`Type` 拼错一个字母、或者对端升级后新增了平台而你还停在旧版，反序列化结果就是一个 `null` 引用**，异常发生在下游使用点而不是转换点，堆栈完全指不到真正的原因。反序列化后立刻 `if (x == null)` 判空是必须的。
- **`CanWrite` 恒为 `false`，`WriteJson` 是空实现。** `AccessObjectJsonConverter.cs:50-58`：`public override bool CanWrite => false;` 且 `WriteJson(...)` 方法体为空。这意味着**通过这个转换器不会序列化**——但因为 `CanWrite` 为 false，Newtonsoft 会退回默认契约，也就是**照常把 `Type` 当普通属性写出去**。所以 `Type` 能上线，靠的是默认序列化，不是这个转换器。这两件事很容易被误读成矛盾。
- **`Type` 不校验自洽性。** 你完全可以 `new MySteamish { Type = "Steam" }` 然后被反序列化成 `SteamAccessObject`，`Populate` 之后得到一个 `AppId = 0`、`UserName = null` 的对象——**不报错**。派生类和判别式的一致性完全靠派生类构造函数的自觉。
- **无参构造函数不能省。** `ReadJson` 对每条命中分支都走 `new SteamAccessObject()` 这种无参构造，省掉它就编译不过。但 `private set` 的属性 `Populate` 能填（Newtonsoft 走反射/动态方法），所以六个派生类的属性全是 `{ get; private set; }` 而不是只读属性。
- **`TaleWorlds.Diamond` 在文档工具链里被归为 noise 命名空间**（见 `tools/lib/handwritten-policy.mjs` 的 `isBaseNoiseNamespace` 正则含 `TaleWorlds\.Diamond`）。它之所以还有页面，是因为这一批是人工深写、不走自动分类器。你在别处批量生成文档时会发现这个类型「消失」，那不是 bug。
- **这个基类对普通玩法 mod 没有任何用处。** 它属于登录/联机凭证通道，和 [Campaign](../../campaign/Campaign)、[Mission](../../mission/Mission) 都不沾边。除非你在写平台层或联机启动器，否则正确答案是「不要碰」。

## 跨版本提示

`AccessObject` 在 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树里**逐字节一致**：都是 16 行、只有一个 `public string Type { get; set; }`、同样的 `[JsonConverter(typeof(AccessObjectJsonConverter))] [Serializable]` 两个特性。跨 1.3 → 1.5 三个大版本，公开面零变化。

变化在**周边装配**上，不在这个类型上：

- 1.3.0 树里只有 `TaleWorlds.Diamond` 一个工程，六个派生类和转换器都在里面，**没有生成方**。1.3.15 树里新增了 `TaleWorlds.Diamond.AccessProvider.Steam` / `.GDK` / `.GOG` / `.Test` 四个独立工程，`SteamLoginAccessProvider.cs:66` 那行 `AccessObjectResult.CreateSuccess(new SteamAccessObject(...))` 就是生成方。
- 换句话说：**1.3.0 的 `AccessObject` 是「只有协议没有生产者」的半截状态**，1.3.15 才补齐成完整的六平台矩阵。`EpicAccessObject` 和 `PSAccessObject` 在 1.3.15 的工程列表里没有对应 AccessProvider 工程（只有 Steam/GDK/GOG/Test），但类和判别式分支仍在 Diamond 里——所以「有类无生产者」的状态在 1.3.15 依然存在，只是换了平台。
- 1.4.5 树是裁剪过的部分源码（只有 `Bannerlord.Source`），无法作为对照依据。

**对 mod 的结论：这个类型从 1.3.0 到 1.5.3 一个字节都没变，抄过去的代码不需要为升级做任何改动。** 但如果你在 1.4.x/1.5.x 上想要一个新的平台判别式，仍然做不到——转换器的 if-else 链至今没有开放扩展点。

## 依赖关系

- 唯一的读侧：[AccessObjectJsonConverter](../AccessObjectJsonConverter) 的 `ReadJson` 读 `Type` 选派生类，`CanWrite` 恒 false，`WriteJson` 空实现
- 唯一的装箱侧：[AccessObjectResult](../AccessObjectResult) 的 `AccessObject AccessObject` 属性与 `CreateSuccess` / `CreateFailed` 两个工厂方法，是它在网络层上的载体
- 唯一的生产契约：[ILoginAccessProvider](../ILoginAccessProvider) 的 `CreateAccessObject()`，六个派生类的带参构造函数就是它的实现返回值
- 同级派生类：`SteamAccessObject` / `EpicAccessObject` / `GOGAccessObject` / `GDKAccessObject` / `PSAccessObject` / `TestAccessObject`，各自带平台凭证字段与写判别式的带参构造函数
- 桶首页：[campaign-ext API 分区](../)