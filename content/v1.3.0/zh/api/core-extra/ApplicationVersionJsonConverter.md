---
title: "ApplicationVersionJsonConverter"
description: "ApplicationVersion 的 Newtonsoft 序列化适配器：把整个版本结构压成单个 _version 字符串字段，读写都只经过 GetPrefix 与 FromString 一对映射。"
---

# ApplicationVersionJsonConverter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ApplicationVersionJsonConverter : JsonConverter`（Newtonsoft.Json）
**Base:** `Newtonsoft.Json.JsonConverter`（抽象类，必须实现 `CanConvert` / `ReadJson` / `WriteJson`）
**File:** `TaleWorlds.Library/ApplicationVersionJsonConverter.cs`（41 行 / 1291 字节）

## 概述

`ApplicationVersionJsonConverter` 是 [ApplicationVersion](../ApplicationVersion) 的 JSON 形态适配器。它不是一个通用转换器，只服务这一个类型——`CanConvert(Type objectType)` 返回 `typeof(ApplicationVersion).IsAssignableFrom(objectType)`，也就是「是 `ApplicationVersion` 或它的派生类型」。它**没有被任何代码显式 `new` 出来过**：`grep -rnw "ApplicationVersionJsonConverter" bannerlord-1.3.0 --include=*.cs` 除了它自己只命中 [ApplicationVersion](../ApplicationVersion).cs 第 8 行的类级特性 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`。

它存在的原因是 [ApplicationVersion](../ApplicationVersion) 的 JSON 形态**不是五个字段的对象**，而是一个只有一个键的对象：

```json
{ "_version": "v1.3.0.89406" }
```

这一个键的值就是 `ToString()` 的产物，键名 `_version` 在源码里硬编码了两次（读一次、写一次），不能配置。

## 心智模型

把它当成**「把一个带运算符重载的值类型压成稳定字符串」的适配器**就对了。为什么要这么做？因为 [ApplicationVersion](../ApplicationVersion) 的五个属性全是 `private set` 的自动属性，Newtonsoft 默认的反序列化要么走构造函数、要么去写属性——而这里**两边都被堵死了**：没有无参构造函数，setter 不公开。所以官方选择了一条最省事的路：**不拆字段，只搬字符串**。

于是它的实现可以压缩成两句对称的话。写：`WriteJson` 把 `((ApplicationVersion)value).ToString()` 塞进一个 `new JProperty("_version", ...)`，再包进 `JObject` 写出去。读：`ReadJson` 用 `JObject.Load(reader)` 读出整个对象，然后 `(string)JObject.Load(reader)["_version"]` 取出那个字符串，交给 `ApplicationVersion.FromString(..., 0)`。

有一个不对称值得注意：**`CanWrite` 被显式重写成 `return true;`**。基类 `JsonConverter.CanWrite` 默认返回 `false`，默认语义是「我不负责写，你用默认反射来写」。这里显式打开，说明作者明确要求**双向都必须经过这个转换器**——否则写出去的就是五个数字字段的默认形态，跟读进来的对不上。这也解释了为什么 [ApplicationVersion](../ApplicationVersion) 的五个属性上都还挂着 `[JsonIgnore]`：那些特性在有转换器时是冗余的，但保留着能在转换器被绕开时提供第二道保险。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | 返回 `typeof(ApplicationVersion).IsAssignableFrom(objectType)`。`IsAssignableFrom` 意味着派生类型也会命中——但 [ApplicationVersion](../ApplicationVersion) 是 `struct` 且没标 `sealed`，理论上可以派生（现实中没人这么做）。 |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | `return ApplicationVersion.FromString((string)JObject.Load(reader)["_version"], 0);` 一行。**`existingValue` 与 `serializer` 两个参数完全没用上**，所以不支持 `$ref` 复用、不支持自定义 settings 传入。返回类型是 `object`（装箱），由 Newtonsoft 再转回 `ApplicationVersion`。 |
| `CanWrite` | `public override bool CanWrite { get { return true; } }` | **显式覆盖基类的 `false` 默认值**，强制写入也走这个转换器。这是本页唯一一个「覆写成常量」的成员。 |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | 造 `JProperty("_version", ((ApplicationVersion)value).ToString())` → `new JObject { jproperty }` → `jobject.WriteTo(writer, Array.Empty<JsonConverter>())`。最后那个 `Array.Empty<JsonConverter>()` 显式传**空转换器数组**，意思是内层节点不走任何自定义转换器。 |

## 真实示例

把一个带版本字段的对象整体序列化（形状就是 `{"_version": "..."}`，不是字段展开）：

```csharp
public class MySaveHeader
{
    public string CampaignName { get; set; }
    public ApplicationVersion WrittenBy { get; set; }
}

MySaveHeader header = new MySaveHeader
{
    CampaignName = "my_campaign",
    WrittenBy = ApplicationVersion.FromString("v1.3.0", 0)
};
string json = JsonConvert.SerializeObject(header);
Debug.Print(json, 0);
```

反序列化，**注意 `FromString` 的异常必须自己接**——`_version` 缺失或段数不对时转换器不会降级，会直接抛：

```csharp
try
{
    MySaveHeader header = JsonConvert.DeserializeObject<MySaveHeader>(json);
    Debug.Print("written by " + header.WrittenBy.ToString(), 0);
}
catch (Exception ex)
{
    Debug.Print("bad _version payload: " + ex.Message, 0);
}
```

按官方 `GauntletUISubModule` 的形状把版本串喂给 UI（版本串是 [ApplicationVersion](../ApplicationVersion).`ToString()` 的直出）：

```csharp
ApplicationVersion installed = Utilities.GetApplicationVersionWithBuildNumber();
string bannerText = "Bannerlord " + installed.ToString();
GauntletGameVersionView.AddModuleVersionInfo("Bannerlord", installed.ToString());
Debug.Print(bannerText, 0);
```

## 风险与边界

- **`ReadJson` 无任何容错。** `JObject.Load(reader)["_version"]` 拿不到键就是 `null`，`(string)null` 得 null，再进 `FromString` 在 `array[0][0]` 上越界；段数不是 3 或 4 则 `throw new Exception("Wrong version as string")`。**转换器不会返回默认值，也不会静默吞掉。**
- **只认 `_version` 这一个键，且键名硬编码。** 改名、改成 `version`、或者写成扁平字符串 `"v1.3.0.89406"`，都会走进上面的异常路径。
- **`FromString` 的第二参数写死 0。** 读回来的版本 `ChangeSet` 若字符串里没有第四段，一律填 0，**不是** [ApplicationVersion](../ApplicationVersion) 的 `defaultChangeSet` 参数。
- **`CanWrite` 恒 true 意味着无法绕过。** 想用默认反射写出五个字段，只能在 `JsonConvert` 的 settings 里显式移除这个转换器。
- **`existingValue` / `serializer` 未使用。** 不支持 Newtonsoft 的 `$ref` 对象复用，也不读全局 `JsonSerializerSettings`（比如自定义 converter 集合）。
- **硬依赖 Newtonsoft.Json。** `using Newtonsoft.Json;` 与 `using Newtonsoft.Json.Linq;` 写在文件顶部。它是 `TaleWorlds.Library` 对 JSON 库的唯一耦合点之一。
- **反序列化时会有一次装箱。** `ReadJson` 返回 `object`，值类型被装箱后再由 Newtonsoft 拆箱。版本比较在热路径上大量出现时不值得为此建缓存。
- **序列化字符串不是双向稳定的。** [ApplicationVersion](../ApplicationVersion).`ApplicationVersionTypeFromString` 不接受 `"i"`，所以 `Invalid` 通道的版本（也就是 `Empty`）写出去再读回来会失败。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/ApplicationVersionJsonConverter.cs:8`，`public class ApplicationVersionJsonConverter : JsonConverter`，无字段、无 ctor、三个重写方法。**你不应该 new 它** —— 入口是挂在被序列化类型上的特性：`ApplicationVersion.cs:8` 有一行 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`，它作用在 `ApplicationVersion` 这个 struct 声明上。所以只要你的对象上出现一个 `ApplicationVersion` 属性，Newtonsoft 就会自动选中这个转换器；mod 侧唯一「主动拿到它」的场景是处理一个你控制不了的第三方类型时，把 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]` 贴到那个属性上。

它是 `TaleWorlds.Library` 程序集里的类，所以 `using Newtonsoft.Json;` 是必需的（文件顶部就是这么写的）。它对 `TaleWorlds.Library` 之外的世界一无所知 —— 只认 `_version` 这一个键。

**一段可直接跑的形状契约检查**（先确认自己写出的 JSON 能被同一个转换器吃回来）：

```csharp
// WriteJson（:33）只写一个键：{"_version":"v1.3.0.89406"}。
// GetPrefix + 四个 int 就是 ToString()（:208）的全部内容，没有别的字段。
string json = JsonConvert.SerializeObject(
    ApplicationVersion.FromString("v1.3.0.89406", 0));
Debug.Print(json, 0);

// 反方向只认 _version 这个键名（ReadJson :19）。
ApplicationVersion back = JsonConvert.DeserializeObject<ApplicationVersion>(
    "{\"_version\":\"v1.3.0.89406\"}");
Debug.Print("major = " + back.Major + " type = " + back.ApplicationVersionType, 0);
```

`CanWrite` 是硬编码 `return true;`（`ApplicationVersionJsonConverter.cs:24`），所以写不写由你决定不了：任何 `ApplicationVersion` 一旦被序列化，就一定是嵌套的 `{"_version": ...}` 对象，而不是展开成字段。想把版本号摊平成字符串字段，唯一办法是在自己的类型上用 `string` 而不是 `ApplicationVersion`。

**最常见的坑：JSON 里少了 `_version`，抛出来的异常指向的是错误的地方。** `ReadJson` 写的是 `ApplicationVersion.FromString((string)JObject.Load(reader)["_version"], 0)`（`ApplicationVersionJsonConverter.cs:19`）。键不存在时 `JObject["_version"]` 返回 `null`，强转成 `string` 仍然得到 `null`，于是 `FromString` 的第一行 `versionAsString.Split(...)`（`ApplicationVersion.cs:69`）解引用空引用——**抛的是 `NullReferenceException`，堆栈最上面那一帧是你的 `JsonConvert.DeserializeObject` 调用处，不是那个 JSON 文件**。

后果很具体：读一个由旧版本写出的存档（那时字段名还是 `version`），你会得到一个看起来跟「JSON 格式不对」完全一样的空引用异常，于是去检查序列化配置、检查字段名映射、检查大小写——而真正的原因是那条 `catch` 里的 `_version` 键不存在。凡是接外部输入，先自己 `JObject` 取一次 `_version` 判空，再交给转换器。

## 跨版本提示

`ApplicationVersionJsonConverter.cs` 在五棵树（`bannerlord-1.3.0/` / `bannerlord-1.3.15/` / `bannerlord-1.4.6/` / `bannerlord-1.4.7/` / `bannerlord-1.5.3/`）里**公开表面完全一致**：`CanConvert` / `ReadJson` / `CanWrite` / `WriteJson` 四个成员、签名一字不差。

差异只有一处，且是反编译产物形态：1.3.0 是 1291 字节，写法是

```csharp
JObject jobject = new JObject();
jobject.Add(jproperty);
jobject.WriteTo(writer, Array.Empty<JsonConverter>());
```

1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 都是 1244 字节，写法折成了集合初始化器 `new JObject { jproperty }.WriteTo(writer, Array.Empty<JsonConverter>());`。**生成的 JSON 完全一样，零语义差异。**

配套的 [ApplicationVersion](../ApplicationVersion) 公开表面在五棵树里也一致，只有 `DefaultChangeSet` 的常量值从 1.3.0 的 `89406` 变成 1.4.6+ 的 `115628`——这会改变 `ToString()` 的最后一段，从而改变 `_version` 的字符串内容。**升级后老配置文件里的 `_version` 仍然能正常解析**（`FromString` 接受四段），这是安全的。

## 依赖关系

- 唯一服务对象：[ApplicationVersion](../ApplicationVersion) 通过类级 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]` 挂上本转换器，`ToString()` 与 `FromString(string, int)` 是它调用的两个入口
- 类型位映射：[ApplicationVersionType](../ApplicationVersionType) 的 `GetPrefix` / `ApplicationVersionTypeFromString` 通过 `ToString` / `FromString` 间接参与本转换器的读写
- 版本串来源：[Utilities](../../engine/Utilities) 的 `GetApplicationVersionWithBuildNumber()` 提供待序列化的实例
- 存档元数据侧：[MBSaveLoad](../MBSaveLoad) 把 `CurrentVersion.ToString()` 写进存档 metaData 的 `ApplicationVersion` 键；[MetaDataExtensions](../MetaDataExtensions) 的 `GetModuleVersion` 负责反向解析
- 运行时载体：整个类型依赖 `Newtonsoft.Json`（`JsonConverter` / `JsonReader` / `JsonWriter` / `JsonSerializer`）与 `Newtonsoft.Json.Linq`（`JObject` / `JProperty`），这两个命名空间由游戏运行时装配，不由源码树托管
- 断言输出：[Debug](../Debug) 是把序列化失败转成可见信号的常规手段
- 桶首页：[core-extra API 分区](../)