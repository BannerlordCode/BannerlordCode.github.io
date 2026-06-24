<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Common`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Common

**命名空间:** TaleWorlds.Library  
**模块:** TaleWorlds.Library  
**类型:** static class

通用工具函数集合。提供字节合并、哈希计算、罗马数字转换、JSON 序列化、IP 地址解析、并行选项、反射调用日志、字符检查等静态工具方法?
## 概述

`Common

` ?

`TaleWorlds.Library

` 中的静态工具类，包含各种不归类到特定子系统的实用函数。涵盖：字节数组合并（`CombineBytes

`）、哈希计算（

`CalculateMD5Hash

`、`CreateNanoIdFrom

`、`GetDJB2

`）、罗马数字转换（

`ToRoman

`）、JSON 序列?反序列化（`SerializeObjectAsJson

`/

`DeserializeObjectFromJson

`）、Base64 解码（`FromUrlSafeBase64

`）、类型查找（

`FindType

`）、GC 清理（`MemoryCleanupGC

`）、带日志的反射调用（

`DynamicInvokeWithLog

`/

`InvokeWithLog

`）、字符检查（

`IsAllLetters

`、`IsCharAsian

`）、IP 地址解析（`ParseIpAddress

`）等?
## 
## 心智模型

先把 `Common` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| PlatformFileHelper \| IPlatformFileHelper \| 平台文件助手实例 \|
\| ConfigName \| string \| 当前目录名（用作配置名） \|
\| ParallelOptions \| ParallelOptions \| 并行选项（最大并行度 = CPU 核心?- 2?\|
\| EnableLoadStatistics \| bool \| 是否启用加载统计（始终返?false?\|

## 方法

### 字节与哈?
#### CombineBytes

`

`

`csharp
public static byte[] CombineBytes(byte[] arr1, byte[] arr2, byte[] arr3 = null, byte[] arr4 = null, byte[] arr5 = null)
`

`

`

合并 2~5 个字节数组为一个新数组?
#### CalculateMD5Hash

`

`

`csharp
public static string CalculateMD5Hash(string input)
`

`

`

计算字符串的 MD5 哈希，返回十六进制大写字符串?
#### CreateNanoIdFrom

`

`

`csharp
public static string CreateNanoIdFrom(string input)
`

`

`

从字符串生成 8 字符?NanoID（基?SHA256 哈希? 位编码）?
#### GetDJB2

`

`

`csharp
public static int GetDJB2(string str)
`

`

`

DJB2 哈希算法。初始?5381，按 

`hash * 33 + c

` 计算?
### 文本与数?
#### ToRoman

`

`

`csharp
public static string ToRoman(int number)
`

`

`

?1~3999 的整数转换为罗马数字字符串。递归实现?
#### TextContainsSpecialCharacters

`

`

`csharp
public static bool TextContainsSpecialCharacters(string text)
`

`

`

检查文本是否包含非空白、非字母数字、非标点的特殊字符?
#### IsAllLetters / IsAllLettersOrWhiteSpaces

`

`

`csharp
public static bool IsAllLetters(string text)
public static bool IsAllLettersOrWhiteSpaces(string text)
`

`

`

检查文本是否全为字?/ 字母或空白?
#### IsCharAsian

`

`

`csharp
public static bool IsCharAsian(char character)
`

`

`

检查字符是否为亚洲字符（CJK 统一表意文字及相关区块）?
### JSON 序列?
`

`

`csharp
public static byte[] SerializeObjectAsJson(object o)
public static string SerializeObjectAsJsonString(object o)
public static T DeserializeObjectFromJson&lt;T&gt;(string json)
`

`

`

使用 Newtonsoft.Json 进行 JSON 序列化和反序列化?
### Base64 ?IP

`

`

`csharp
public static byte[] FromUrlSafeBase64(string base64)
public static uint ParseIpAddress(string address)
`

`

`

URL 安全 Base64 解码（`_

`→`/

`，`-

`→`+

`）；IP 地址字符串转 uint?
### 反射与调?
#### FindType

`

`

`csharp
public static Type FindType(string typeName)
`

`

`

在所有已加载程序集中查找类型?
#### GetMethodInfo

`

`

`csharp
public static MethodInfo GetMethodInfo(LambdaExpression expression)
public static MethodInfo GetMethodInfo&lt;T&gt;(Expression&lt;Action&lt;T&gt;&gt; expression)
public static MethodInfo GetMethodInfo&lt;T, TResult&gt;(Expression&lt;Func&lt;T, TResult&gt;&gt; expression)
`

`

`

?lambda 表达式提?MethodInfo?
#### DynamicInvokeWithLog / InvokeWithLog

`

`

`csharp
public static object DynamicInvokeWithLog(this Delegate method, params object[] args)
public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object[] args)
public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object[] args)
`

`

`

带异常日志的反射调用扩展方法。异常时打印方法名、目标类型、参数类型和内部异常堆栈到崩溃报告?
### 其他

#### MemoryCleanupGC

`

`

`csharp
public static void MemoryCleanupGC(bool forceTimer = false)
`

`

`

执行完整 GC 回收?
#### SetInvariantCulture

`

`

`csharp
public static void SetInvariantCulture()
`

`

`

将当前线程和默认线程文化设置?InvariantCulture?
## 使用示例

`

`

`csharp
// 哈希计算
string hash = Common.CalculateMD5Hash("hello");
string nanoId = Common.CreateNanoIdFrom("input text");

// 罗马数字
string roman = Common.ToRoman(42); // "XLII"

// JSON 序列?byte[] json = Common.SerializeObjectAsJson(myObject);
MyClass obj = Common.DeserializeObjectFromJson&lt;MyClass&gt;(jsonString);

// 带日志的反射调用
methodInfo.InvokeWithLog(target, arg1, arg2);

// 并行处理
Parallel.For(0, 100, Common.ParallelOptions, i =&gt; { /* ... */ });
`

`

`

## 参见

- [ItemVM](./ItemVM.md)
- [core-extra 类目录](../catalog-core.md)
